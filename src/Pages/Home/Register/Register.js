import React, { useState } from 'react';
import { TextField, Typography, Button, Alert, CircularProgress, IconButton, Input } from '@mui/material';
import { Box } from '@mui/system';
import Navigation from '../../Shared/Navigation/Navigation';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({});
    // const { user, loginUser, isLoading, authError } = useAuth();

    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newRegistrationData = { ...registrationData };
    //     newRegistrationData[field] = value;
    //     setRegistrationData(newRegistrationData);
    //     console.log(newRegistrationData);
    // }
    // const handleRegister = e => {
    //     loginUser(loginData.email, loginData.password)
    //     e.preventDefault();
    //     if (password.length < 8) {
    //         setError('Password must be at least 8 Characters long!');
    //         return;
    //     }
    //     else {
    //         isLogin ? processLogin(email, password) : registerNewUser(email, password);
    //     }
    // }

    return (
        <Box className="home">
            <Box>
                <Navigation />
                <Box sx={{ mt: 5, width: 350 }}>
                    <form>
                        <label htmlFor="icon-button-file" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <label style={{ fontSize: 18, fontWeight: 'bold' }}>Upload Profile Picture</label>
                            <Input accept="image/*" id="icon-button-file" type="file" sx={{ width: '100%', display: 'none' }} />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                        <TextField
                            id="standard-basic-name"
                            label="Enter Your Name"
                            type="text"
                            name="name"
                            // onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: '100%', mb: 1 }}
                        /><br />
                        <TextField
                            id="standard-basic-email"
                            label="Enter Your Email"
                            type="email"
                            name="email"
                            // onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: '100%', mb: 1 }}
                        /><br />
                        <TextField
                            id="standard-basic-password"
                            type="password"
                            label="Enter Your Password" variant="standard"
                            name="password"
                            // onBlur={handleOnBlur}
                            sx={{ width: '100%', mb: 1 }}
                        /><br />
                        <Typography variant="body1" sx={{ color: 'red', cursor: 'pointer' }}>Forget Your Password?</Typography>
                        <br />
                        <Button variant="contained" className="bgColor1" type="submit" sx={{ mt: 2 }}>Register</Button>
                    </form>
                </Box>
            </Box>
        </Box >
    );
};

export default Register;