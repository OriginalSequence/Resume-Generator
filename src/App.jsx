import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Project from './components/Project';
import CVPreview from './components/CVPreview';
import Sortable from 'sortablejs';
import './App.css';

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
    });

    const [additionalFields, setAdditionalFields] = useState([]);
    const [sectionsOrder, setSectionsOrder] = useState(['education', 'experience', 'skills', 'projects']);
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const [skillData, setSkillData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    const listRef = useRef(null);

    useEffect(() => {
        const sortable = new Sortable(listRef.current, {
            animation: 150,
            onEnd: (event) => {
                const { oldIndex, newIndex } = event;
                if (oldIndex !== newIndex) {
                    const updatedSectionsOrder = [...sectionsOrder];
                    const [movedItem] = updatedSectionsOrder.splice(oldIndex, 1);
                    updatedSectionsOrder.splice(newIndex, 0, movedItem);
                    setSectionsOrder(updatedSectionsOrder);
                }
            },
        });

        return () => {
            sortable.destroy();
        };
    }, [sectionsOrder]);

    return (
        <div className="container">
            <div className="left-column">
                <Header
                    generalInfo={generalInfo}
                    additionalFields={additionalFields}
                    onGeneralInfoChange={setGeneralInfo}
                    onAdditionalFieldsChange={setAdditionalFields}
                />
                <div ref={listRef} className="draggable-list">
                    {sectionsOrder.map((section) => (
                        <div key={section} className="draggable-item">
                            {section === 'education' && (
                                <Education
                                    key="education"
                                    educationData={educationData}
                                    onEducationChange={setEducationData}
                                />
                            )}
                            {section === 'experience' && (
                                <Experience
                                    key="experience"
                                    experienceData={experienceData}
                                    onExperienceChange={setExperienceData}
                                />
                            )}
                            {section === 'skills' && (
                                <Skill
                                    key="skills"
                                    skillData={skillData}
                                    onSkillChange={setSkillData}
                                />
                            )}
                            {section === 'projects' && (
                                <Project
                                    key="projects"
                                    projectData={projectData}
                                    onProjectChange={setProjectData}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-column">
                <CVPreview
                    generalInfo={generalInfo}
                    additionalFields={additionalFields}
                    educationData={educationData}
                    experienceData={experienceData}
                    skillData={skillData}
                    projectData={projectData}
                    sectionsOrder={sectionsOrder}
                />
            </div>
        </div>
    );
}

export default App;
