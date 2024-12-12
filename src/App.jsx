import { useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Projects from './components/Project';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
    });

    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const [skillData, setSkillData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    return (
        <div className="container">
            <div className="left-column">
                <Header
                    generalInfo={generalInfo}
                    onGeneralInfoChange={setGeneralInfo}
                />
                <Education
                    educationData={educationData}
                    onEducationChange={setEducationData}
                />
                <Experience
                    experienceData={experienceData}
                    onExperienceChange={setExperienceData}
                />
                <Skill
                    skillData={skillData}
                    onSkillChange={setSkillData}
                />
                <Projects
                    projectData={projectData}
                    onProjectChange={setProjectData}
                />
            </div>
            <div className="right-column">
                <CVPreview
                    generalInfo={generalInfo}
                    educationData={educationData}
                    experienceData={experienceData}
                    skillData={skillData}
                    projectData={projectData}
                />
            </div>
        </div>
    );
}

export default App;
