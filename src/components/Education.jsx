import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Delete as DeleteIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

function Education({ educationData, onEducationChange }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const newEducationData = [...educationData];
        newEducationData[index][name] = value;
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

    const handleToggleEdit = () => {
        setIsEditing((prevIsEditing) => !prevIsEditing);
    };

    return (
        <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>Education</Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                {educationData.map((edu, index) => (
                    <Accordion key={index} sx={{ marginBottom: 2, border: 0.5 , boxShadow: 3}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {edu.schoolName || "New Education Entry"}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                label="School Name"
                                name="schoolName"
                                value={edu.schoolName}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Title of Study"
                                name="titleOfStudy"
                                value={edu.titleOfStudy}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Date of Study"
                                name="dateOfStudy"
                                value={edu.dateOfStudy}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            {isEditing && (
                                <Button
                                    onClick={() => handleDeleteEducation(index)}
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
                    <Button type="button" onClick={handleAddEducation} startIcon={<Add />} variant="outlined"
                            sx={{ marginTop: 2 }}>Add Education</Button>
                )}
                <Button onClick={handleToggleEdit} variant="contained" color={isEditing ? "primary" : "secondary"}
                        sx={{ marginTop: 2 }}>
                    {isEditing ? "Submit" : "Edit"}
                </Button>
            </form>
        </Box>
    );
}

Education.propTypes = {
    educationData: PropTypes.array.isRequired,
    onEducationChange: PropTypes.func.isRequired,
};

export default Education;

