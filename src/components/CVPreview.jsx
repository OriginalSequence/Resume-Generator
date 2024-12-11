import PropTypes from 'prop-types';

function CVPreview({ generalInfo = {}, educationData = [], experienceData = [] }) {
    console.log('generalInfo:', generalInfo);
    console.log('educationData:', educationData);
    console.log('experienceData:', experienceData);

    return (
        <div>
            <h2>Personal Information</h2>
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone Number: {generalInfo.phoneNumber}</p>

            <h2>Education</h2>
            <ul>
                {educationData.map((edu, index) => (
                    <li key={index}>
                        School:{edu.schoolName},Degree: {edu.titleOfStudy},Date: {edu.dateOfStudy}
                    </li>
                ))}
            </ul>

            <h2>Experience</h2>
            <ul>
                {experienceData.map((exp, index) => (
                    <li key={index}>
                        {exp.companyName}, {exp.position}, {exp.startDate} - {exp.endDate}, {exp.location}
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

CVPreview.propTypes = {
    generalInfo: PropTypes.object,
    educationData: PropTypes.array,
    experienceData: PropTypes.array,
};

export default CVPreview;
