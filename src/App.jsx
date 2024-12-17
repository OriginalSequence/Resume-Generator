import { useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Projects from './components/Project';
import CVPreview from './components/CVPreview';
import './App.css';
import { ItemTypes } from './components/ItemTypes';
import DraggableSection from './components/DraggableSection';

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

    const moveSection = (dragIndex, hoverIndex) => {
        const newSectionsOrder = [...sectionsOrder];
        const [removed] = newSectionsOrder.splice(dragIndex, 1);
        newSectionsOrder.splice(hoverIndex, 0, removed);
        setSectionsOrder(newSectionsOrder);
    };

    return (
        <div className="container">
            <div className="left-column">
                <Header
                    generalInfo={generalInfo}
                    additionalFields={additionalFields}
                    onGeneralInfoChange={setGeneralInfo}
                    onAdditionalFieldsChange={setAdditionalFields}
                />
                {sectionsOrder.map((section, index) => (
                    <DraggableSection key={section} id={section} index={index} moveSection={moveSection}>
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
                            <Projects
                                key="projects"
                                projectData={projectData}
                                onProjectChange={setProjectData}
                            />
                        )}
                    </DraggableSection>
                ))}
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










