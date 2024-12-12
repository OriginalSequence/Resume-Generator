import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Delete as DeleteIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

function Projects({ projectData, onProjectChange }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const newProjectData = [...projectData];
        newProjectData[index][name] = value;
        onProjectChange(newProjectData);
    };

    const handleAddProject = () => {
        onProjectChange([...projectData, { projectName: '', projectLink: '', description: '' }]);
    };

    const handleDeleteProject = (index) => {
        const newProjectData = [...projectData];
        newProjectData.splice(index, 1);
        onProjectChange(newProjectData);
    };

    const handleToggleEdit = () => {
        setIsEditing((prevIsEditing) => !prevIsEditing);
    };

    return (
        <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>Projects</Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                {projectData.map((project, index) => (
                    <Accordion key={index} sx={{ marginBottom: 2, border: 0.5, boxShadow: 3 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {project.projectName || "New Project Entry"}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                label="Project Name"
                                name="projectName"
                                value={project.projectName}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Project Link"
                                name="projectLink"
                                value={project.projectLink}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Description"
                                name="description"
                                value={project.description}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                InputProps={{ readOnly: !isEditing }}
                            />
                            {isEditing && (
                                <Button
                                    onClick={() => handleDeleteProject(index)}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                    sx={{ marginTop: 2 }}
                                >
                                    DELETE
                                </Button>
                            )}
                        </AccordionDetails>
                    </Accordion>
                ))}
                {isEditing && (
                    <Button type="button" onClick={handleAddProject} startIcon={<Add />} variant="outlined"
                            sx={{ marginTop: 2 }}>Add Project</Button>
                )}
                <Button onClick={handleToggleEdit} variant="contained" color={isEditing ? "primary" : "secondary"}
                        sx={{ marginTop: 2 }}>
                    {isEditing ? "Submit" : "Edit"}
                </Button>
            </form>
        </Box>
    );
}

Projects.propTypes = {
    projectData: PropTypes.array.isRequired,
    onProjectChange: PropTypes.func.isRequired,
};

export default Projects;
