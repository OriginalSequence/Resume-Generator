import { useState } from 'react';
import PropTypes from 'prop-types';

function Education({ educationData, onEducationChange }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleInputChange = (e, index) => {
        const newEducationData = [...educationData];
        newEducationData[index][e.target.name] = e.target.value;
        onEducationChange(newEducationData);
    };

    const handleAddEducation = () => {
        onEducationChange([...educationData, { schoolName: '', titleOfStudy: '', dateOfStudy: '' }]);
    };

    const handleDeleteEducation = (index) => {
        const newEducationData = [...educationData];
        newEducationData.splice(index, 1);
        onEducationChange(newEducationData);
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
                    <h2>Education</h2>
                    {educationData.map((edu, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="schoolName"
                                value={edu.schoolName}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="School Name"
                            />
                            <input
                                type="text"
                                name="titleOfStudy"
                                value={edu.titleOfStudy}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Title of Study"
                            />
                            <input
                                type="text"
                                name="dateOfStudy"
                                value={edu.dateOfStudy}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Date of Study"
                            />
                            <button onClick={() => handleDeleteEducation(index)}>Delete</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddEducation}>Add Education</button>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <h2>Education</h2>
                    <ul>
                        {educationData.map((edu, index) => (
                            <li key={index}>
                                {edu.schoolName}, {edu.titleOfStudy}, {edu.dateOfStudy}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

Education.propTypes = {
    educationData: PropTypes.array.isRequired,
    onEducationChange: PropTypes.func.isRequired,
};

export default Education;

