import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Paper, Divider, Grid } from '@mui/material';

function CVPreview({ generalInfo = {}, additionalFields = [], educationData = [], experienceData = [], skillData = [], projectData = [], sectionsOrder = [] }) {
    const optionalFields = [
        generalInfo.phoneNumber,
        generalInfo.email,
        generalInfo.location,
        ...additionalFields
    ];

    const filledFields = optionalFields.filter(field => field);

    return (
        <Paper sx={{ width: '210mm', height: '297mm', padding: 3, margin: 'auto', backgroundColor: '#fff', boxShadow: 3 }} id="cv-preview">
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant="h4" gutterBottom>{generalInfo.name}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                    {filledFields.map((field, index) => (
                        <React.Fragment key={index}>
                            <Typography variant="body2">{field}</Typography>
                            {index < filledFields.length - 1 && <Typography variant="body2" sx={{ mx: 2 }}>|</Typography>}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>

            {sectionsOrder.map((section) => (
                <React.Fragment key={section}>
                    {section === 'education' && educationData.length > 0 && (
                        <Box sx={{ marginBottom: 4 }}>
                            <Typography variant="h5" gutterBottom>Education</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            {educationData.map((edu, index) => (
                                <Box key={index} sx={{ marginBottom: 2 }}>
                                    <Grid container alignItems="center">
                                        <Grid item xs>
                                            <Typography variant="body1">
                                                <strong>{edu.schoolName}</strong> - {edu.titleOfStudy}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" sx={{ textAlign: 'right' }}>
                                                {edu.dateOfStudy}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                        </Box>
                    )}
                    {section === 'experience' && experienceData.length > 0 && (
                        <Box sx={{ marginBottom: 4 }}>
                            <Typography variant="h5" gutterBottom>Experience</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            {experienceData.map((exp, index) => (
                                <Box key={index} sx={{ marginBottom: 2 }}>
                                    <Grid container alignItems="center">
                                        <Grid item xs>
                                            <Typography variant="body1">
                                                <strong>{exp.position}</strong>, {exp.companyName} - {exp.location}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" sx={{ textAlign: 'right' }}>
                                                {exp.startDate} - {exp.endDate}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography component="ul" variant="body2" sx={{ whiteSpace: 'pre-line', paddingLeft: 2, listStyleType: 'disc', margin: 0 }}>
                                        {exp.description.split('\n').map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                    {section === 'skills' && skillData.length > 0 && (
                        <Box sx={{ marginBottom: 4 }}>
                            <Typography variant="h5" gutterBottom>Skills</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            {skillData.map((skill, index) => (
                                <Box key={index} sx={{ marginBottom: 2 }}>
                                    <Grid container alignItems="center">
                                        <Grid item>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                                                {skill.skillGroup}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body2" sx={{ display: 'inline-block' }}>
                                                {skill.skills}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                        </Box>
                    )}
                    {section === 'projects' && projectData.length > 0 && (
                        <Box sx={{ marginBottom: 4 }}>
                            <Typography variant="h5" gutterBottom>Projects</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            {projectData.map((project, index) => (
                                <Box key={index} sx={{ marginBottom: 2 }}>
                                    <Grid container alignItems="center">
                                        <Grid item xs>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                {project.projectName}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" sx={{ textAlign: 'right' }}>
                                                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.projectLink}</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography component="ul" variant="body2" sx={{ whiteSpace: 'pre-line', paddingLeft: 2, listStyleType: 'disc', margin: 0 }}>
                                        {project.description.split('\n').map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                </React.Fragment>
            ))}
        </Paper>
    );
}

CVPreview.propTypes = {
    generalInfo: PropTypes.object,
    additionalFields: PropTypes.array,
    educationData: PropTypes.array,
    experienceData: PropTypes.array,
    skillData: PropTypes.array,
    projectData: PropTypes.array,
    sectionsOrder: PropTypes.array
};

export default CVPreview;
