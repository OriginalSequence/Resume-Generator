import { useState } from 'react';
import PropTypes from 'prop-types';

function Header({ generalInfo, onGeneralInfoChange }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newGeneralInfo = { ...generalInfo, [name]: value };
        onGeneralInfoChange(newGeneralInfo);
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
            <h2>Personal Info</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={generalInfo.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={generalInfo.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                    />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={generalInfo.phoneNumber}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                    />

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone Number: {generalInfo.phoneNumber}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

Header.propTypes = {
    generalInfo: PropTypes.object.isRequired,
    onGeneralInfoChange: PropTypes.func.isRequired,
};

export default Header;

