import { useState } from 'react'
import CVPreview from './components/CVPreview'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import './App.css'

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const [educationData, setEducationData] = useState([
        {
            schoolName: '',
            titleOfStudy: '',
            dateOfStudy: '',
        },
    ]);

    const [experienceData, setExperienceData] = useState([
        {
            companyName: '',
            position: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ''
        },
    ]);

    return (
        <div>
            <div className="container">
                <div className="left-column">
                    <Header generalInfo={generalInfo} onGeneralInfoChange={setGeneralInfo}/>
                    <Education educationData={educationData} onEducationChange={setEducationData}/>
                    <Experience experienceData={experienceData} onExperienceChange={setExperienceData}/>
                </div>
                <div className="right-column">
                    <CVPreview generalInfo={generalInfo} educationData={educationData} experienceData={experienceData}/>
                </div>
            </div>
        </div>
    );
}

export default App;
