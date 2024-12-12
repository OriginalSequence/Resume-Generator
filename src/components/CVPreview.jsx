import PropTypes from 'prop-types';
import { Box, Typography, Paper, Divider, Grid } from '@mui/material';

function CVPreview({ generalInfo = {}, educationData = [], experienceData = [],
                       skillData = [], projectData = [] }) {
    console.log('generalInfo:', generalInfo);
    console.log('educationData:', educationData);
    console.log('experienceData:', experienceData);
    console.log('skillData:', skillData);
    console.log('projectData:', projectData);

    return (
        <Paper sx={{ width: '210mm', height: '297mm', padding: 3, margin: 'auto', backgroundColor: '#fff', boxShadow: 3 }}>
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant="h4" gutterBottom>{generalInfo.name}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="body2">{generalInfo.email}</Typography>
                    <Typography variant="body2" sx={{ mx: 2 }}>|</Typography>
                    <Typography variant="body2">{generalInfo.phoneNumber}</Typography>
                    <Typography variant="body2" sx={{ mx: 2 }}>|</Typography>
                    <Typography variant="body2">{generalInfo.location}</Typography>
                </Box>
            </Box>

            {educationData.length > 0 && (
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

            {experienceData.length > 0 && (
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
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line', marginTop: 1 }}>
                                {exp.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}

            {skillData.length > 0 && (
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

            {projectData.length > 0 && (
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
                                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                                            {project.projectLink}</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line', marginTop: 1 }}>
                                {project.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </Paper>
    );
}

CVPreview.propTypes = {
    generalInfo: PropTypes.object,
    educationData: PropTypes.array,
    experienceData: PropTypes.array,
    skillData: PropTypes.array,
    projectData: PropTypes.array,
};

export default CVPreview;
