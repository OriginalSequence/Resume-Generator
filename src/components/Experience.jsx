import { useState } from 'react';
import PropTypes from 'prop-types';

function Experience({ experienceData, onExperienceChange }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const newExperienceData = [...experienceData];
        newExperienceData[index][name] = value;
        onExperienceChange(newExperienceData);
    };

    const handleAddExperience = () => {
        onExperienceChange([...experienceData, {
            companyName: '',
            position: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ''
        }]);
    };

    const handleDeleteExperience = (index) => {
        const newExperienceData = [...experienceData];
        newExperienceData.splice(index, 1);
        onExperienceChange(newExperienceData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <h2>Experience</h2>
                    {experienceData.map((exp, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="companyName"
                                value={exp.companyName}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Company Name"
                            />
                            <input
                                type="text"
                                name="position"
                                value={exp.position}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Position Title"
                            />
                            <input
                                type="text"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Start Date"
                            />
                            <input
                                type="text"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="End Date"
                            />
                            <input
                                type="text"
                                name="location"
                                value={exp.location}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Location"
                            />
                            <textarea
                                name="description"
                                value={exp.description}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Description"
                                style={{ width: '100%', height: '100px', overflowY: 'scroll' }}
                            />
                            <button type="button" onClick={() => handleDeleteExperience(index)}>Delete</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddExperience}>Add Experience</button>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <h2>Experience</h2>
                    <ul>
                        {experienceData.map((exp, index) => (
                            <li key={index}>
                                <strong>{exp.companyName}</strong>, {exp.position}, {exp.startDate} - {exp.endDate}, {exp.location}
                                <p>{exp.description}</p>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

Experience.propTypes = {
    experienceData: PropTypes.array.isRequired,
    onExperienceChange: PropTypes.func.isRequired,
};

export default Experience;

