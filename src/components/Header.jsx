import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import { Add, Delete as DeleteIcon } from '@mui/icons-material';

function Header({ generalInfo, additionalFields, onGeneralInfoChange, onAdditionalFieldsChange }) {
    const [isEditing, setIsEditing] = useState(true);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newGeneralInfo = { ...generalInfo, [name]: value };
        onGeneralInfoChange(newGeneralInfo);
    };

    const handleAdditionalChange = (e, index) => {
        const { value } = e.target;
        const newAdditionalFields = [...additionalFields];
        newAdditionalFields[index] = value;
        onAdditionalFieldsChange(newAdditionalFields);
        console.log("Additional Fields:", newAdditionalFields); // Debugging output
    };

    const handleAddField = () => {
        if (additionalFields.length < 2) {
            onAdditionalFieldsChange([...additionalFields, '']);
        }
    };

    const handleDeleteField = (index) => {
        const newAdditionalFields = [...additionalFields];
        newAdditionalFields.splice(index, 1);
        onAdditionalFieldsChange(newAdditionalFields);
    };

    const validateFields = () => {
        let newErrors = {};

        // Name is required
        if (!generalInfo.name) {
            newErrors.name = "Name is required.";
        }

        // Phone number validation
        if (generalInfo.phoneNumber) {
            const phonePattern = /^[0-9\b]+$/;
            if (!phonePattern.test(generalInfo.phoneNumber)) {
                newErrors.phoneNumber = "Enter a valid phone number.";
            }
        }

        // Email validation
        if (generalInfo.email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(generalInfo.email)) {
                newErrors.email = "Enter a valid email.";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleToggleEdit = () => {
        if (isEditing) {
            if (validateFields()) {
                setIsEditing(false);
            }
        } else {
            setIsEditing(true);
        }
    };

    return (
        <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" gutterBottom>Personal Information</Typography>
            <form onSubmit={(e) => e.preventDefault()}>
                <TextField
                    label="Name"
                    name="name"
                    value={generalInfo.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: !isEditing }}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={generalInfo.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: !isEditing }}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                />
                <TextField
                    label="Email"
                    name="email"
                    value={generalInfo.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: !isEditing }}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    label="Location"
                    name="location"
                    value={generalInfo.location}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: !isEditing }}
                />
                {additionalFields.map((field, index) => (
                    <Box key={index} display="flex" alignItems="center">
                        <TextField
                            label={`Additional Field ${index + 1}`}
                            value={field}
                            onChange={(e) => handleAdditionalChange(e, index)}
                            fullWidth
                            margin="normal"
                            InputProps={{ readOnly: !isEditing }}
                        />
                        {isEditing && (
                            <IconButton onClick={() => handleDeleteField(index)} color="secondary" sx={{ ml: 1 }}>
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Box>
                ))}
                {isEditing && additionalFields.length < 2 && (
                    <Button type="button" onClick={handleAddField} startIcon={<Add />} variant="outlined" sx={{ marginTop: 2 }}>Add Field</Button>
                )}
                <Button onClick={handleToggleEdit} variant="contained" color={isEditing ? "primary" : "secondary"} sx={{ marginTop: 2 }}>
                    {isEditing ? "Submit" : "Edit"}
                </Button>
            </form>
        </Box>
    );
}

Header.propTypes = {
    generalInfo: PropTypes.object.isRequired,
    additionalFields: PropTypes.array.isRequired,
    onGeneralInfoChange: PropTypes.func.isRequired,
    onAdditionalFieldsChange: PropTypes.func.isRequired,
};

export default Header;
