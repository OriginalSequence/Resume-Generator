import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Typography, Box } from '@mui/material';

function Header({ generalInfo, onGeneralInfoChange }) {
    const [isEditing, setIsEditing] = useState(true);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newGeneralInfo = { ...generalInfo, [name]: value };
        onGeneralInfoChange(newGeneralInfo);
    };

    const validateFields = () => {
        let newErrors = {};

        if (!generalInfo.name) {
            newErrors.name = "Name is required.";
        }

        if (generalInfo.email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(generalInfo.email)) {
                newErrors.email = "Enter a valid email.";
            }
        }

        if (generalInfo.phoneNumber) {
            const phonePattern = /^[0-9\b]+$/;
            if (!phonePattern.test(generalInfo.phoneNumber)) {
                newErrors.phoneNumber = "Enter a valid phone number.";
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
                    label="Location"
                    name="location"
                    value={generalInfo.location}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: !isEditing }}
                />
                <Button onClick={handleToggleEdit} variant="contained" color={isEditing ? "primary" : "secondary"}
                        sx={{ marginTop: 2 }}>
                    {isEditing ? "Submit" : "Edit"}
                </Button>
            </form>
        </Box>
    );
}

Header.propTypes = {
    generalInfo: PropTypes.object.isRequired,
    onGeneralInfoChange: PropTypes.func.isRequired,
};

export default Header;

