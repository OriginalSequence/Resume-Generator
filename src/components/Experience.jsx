import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Delete as DeleteIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

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
            description: '',
        }]);
    };

    const handleDeleteExperience = (index) => {
        const newExperienceData = [...experienceData];
        newExperienceData.splice(index, 1);
        onExperienceChange(newExperienceData);
    };

    const handleToggleEdit = () => {
        setIsEditing((prevIsEditing) => !prevIsEditing);
    };

    return (
        <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>Experience</Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                {experienceData.map((exp, index) => (
                    <Accordion key={index} sx={{ marginBottom: 2, border: 0.5, boxShadow: 3 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {exp.position || "New Experience Entry"}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                label="Company Name"
                                name="companyName"
                                value={exp.companyName}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Position"
                                name="position"
                                value={exp.position}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Start Date"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="End Date"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Location"
                                name="location"
                                value={exp.location}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Description"
                                name="description"
                                value={exp.description}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                InputProps={{ readOnly: !isEditing }}
                            />
                            {isEditing && (
                                <Button
                                    onClick={() => handleDeleteExperience(index)}
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
                    <Button type="button" onClick={handleAddExperience} startIcon={<Add />} variant="outlined"
                            sx={{ marginTop: 2 }}>Add Experience</Button>
                )}
                <Button onClick={handleToggleEdit} variant="contained" color={isEditing ? "primary" : "secondary"}
                        sx={{ marginTop: 2 }}>
                    {isEditing ? "Submit" : "Edit"}
                </Button>
            </form>
        </Box>
    );
}

Experience.propTypes = {
    experienceData: PropTypes.array.isRequired,
    onExperienceChange: PropTypes.func.isRequired,
};

export default Experience;

