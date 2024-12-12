import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Delete as DeleteIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

function Skill({ skillData, onSkillChange }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const newSkillData = [...skillData];
        newSkillData[index][name] = value;
        onSkillChange(newSkillData);
    };

    const handleAddSkillGroup = () => {
        onSkillChange([...skillData, { skillGroup: '', skills: '' }]);
    };

    const handleDeleteSkillGroup = (index) => {
        const newSkillData = [...skillData];
        newSkillData.splice(index, 1);
        onSkillChange(newSkillData);
    };

    const handleToggleEdit = () => {
        setIsEditing((prevIsEditing) => !prevIsEditing);
    };

    return (
        <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>Skills</Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                {skillData.map((skill, index) => (
                    <Accordion key={index} sx={{ marginBottom: 2, border: 0.5, boxShadow: 3 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {skill.skillGroup || "New Skill Group"}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                label="Skill Group"
                                name="skillGroup"
                                value={skill.skillGroup}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                InputProps={{ readOnly: !isEditing }}
                            />
                            <TextField
                                label="Skills"
                                name="skills"
                                value={skill.skills}
                                onChange={(e) => handleInputChange(e, index)}
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                InputProps={{ readOnly: !isEditing }}
                            />
                            {isEditing && (
                                <Button
                                    onClick={() => handleDeleteSkillGroup(index)}
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
                    <Button type="button" onClick={handleAddSkillGroup} startIcon={<Add />} variant="outlined" sx={{ marginTop: 2 }}>Add Skill Group</Button>
                )}
                <Button onClick={handleToggleEdit} variant="contained" color={isEditing ? "primary" : "secondary"} sx={{ marginTop: 2 }}>
                    {isEditing ? "Submit" : "Edit"}
                </Button>
            </form>
        </Box>
    );
}

Skill.propTypes = {
    skillData: PropTypes.array.isRequired,
    onSkillChange: PropTypes.func.isRequired,
};

export default Skill;
