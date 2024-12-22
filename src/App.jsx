import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Button from '@mui/material/Button';
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

    const downloadPDF = () => {
        const input = document.getElementById('cv-preview');

        html2canvas(input, { scale: 2 })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

                pdf.save('resume.pdf');
            });
    };

    const exampleData = {
        generalInfo: {
            name: 'John Doe',
            email: 'John.doe@example.com',
            phoneNumber: '9876543210',
            location: 'San Francisco, CA',
        },
        educationData: [
            {
                schoolName: 'Stanford University',
                titleOfStudy: 'Bachelor of Science in Computer Science',
                dateOfStudy: '2016 - 2020',
            },
        ],
        experienceData: [
            {
                position: 'Software Engineering Intern',
                companyName: 'Facebook',
                location: 'Menlo Park, CA',
                startDate: 'Summer 2019',
                endDate: 'Fall 2019',
                description: 'Developed new features for the main Facebook app using React and Redux.\nCollaborated with cross-functional teams to improve app performance and user experience.\nConducted code reviews and provided feedback to peers.',
            },
            {
                position: 'Backend Engineering Intern',
                companyName: 'Amazon',
                location: 'Seattle, WA',
                startDate: 'Summer 2018',
                endDate: 'Fall 2018',
                description: 'Implemented scalable backend services using AWS, Node.js, and DynamoDB.\nWorked on data pipeline solutions to process and analyze large datasets.\nCollaborated with the frontend team to integrate APIs and ensure seamless functionality.',
            },
            {
                position: 'Data Science Intern',
                companyName: 'Airbnb',
                location: 'San Francisco, CA',
                startDate: 'Summer 2017',
                endDate: 'Fall 2017',
                description: 'Developed machine learning models to predict user preferences and improve recommendation systems.\nAnalyzed large datasets using Python, Pandas, and Scikit-Learn.\nPresented findings to the data science team and provided actionable insights.',
            },
        ],
        skillData: [
            {
                skillGroup: 'Programming Languages',
                skills: 'JavaScript, Python, Java, C++, SQL',
            },
            {
                skillGroup: 'Frameworks & Libraries',
                skills: 'React, Angular, Django, Node.js, Spring Boot',
            },
            {
                skillGroup: 'Tools & Platforms',
                skills: 'AWS, Docker, Git, Kubernetes, Jenkins',
            },
        ],
        projectData: [
            {
                projectName: 'E-Commerce Platform',
                projectLink: 'https://www.shopify.com/',
                description: 'Led the development of an e-commerce platform using React, Node.js, and MongoDB.\nImplemented features such as user authentication, product management, and payment integration.\nDeployed the application on AWS and ensured scalability and performance.',
            },
            {
                projectName: 'Chat Application',
                description: 'Built a real-time chat application using Angular, Node.js, and Socket.io.\nImplemented features such as user registration, real-time messaging, and group chats.\nIntegrated the application with a MongoDB database for storing user data and messages.',
            },
            {
                projectName: 'Sentiment Analysis Tool',
                description: 'Developed a sentiment analysis tool using Python, Pandas, and Scikit-Learn.\nTrained machine learning models to analyze social media posts and classify sentiments.\nVisualized the analysis results using Plotly and presented insights to the team.',
            },
        ],
        additionalFields: [],
        sectionsOrder: ['education', 'experience', 'skills', 'projects'],
    };


    const generateExampleResume = () => {
        setGeneralInfo(exampleData.generalInfo);
        setEducationData(exampleData.educationData);
        setExperienceData(exampleData.experienceData);
        setSkillData(exampleData.skillData);
        setProjectData(exampleData.projectData);
        setAdditionalFields(exampleData.additionalFields);
        setSectionsOrder(exampleData.sectionsOrder);
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
                <div className="download-container">
                    <Button variant="contained" color="primary" onClick={generateExampleResume}>
                        Generate Template
                    </Button>
                    <Button variant="contained" color="secondary" onClick={downloadPDF} sx={{ ml: 2 }}>
                        Download as PDF
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
