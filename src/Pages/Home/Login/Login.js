import React, { useState } from 'react';
import { TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    // const { user, loginUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // const handleLogin = e => {
    //     loginUser(loginData.email, loginData.password)
    //     e.preventDefault();
    // }

    return (
        <Box sx={{ mt: 6, width: 300 }}>
            <form>
                <TextField
                    id="standard-basic-email"
                    label="Enter Your Email"
                    type="email"
                    name="email"
                    // onBlur={handleOnBlur}
                    variant="standard"
                    sx={{ width: '100%', mb: 2 }} /><br />
                <TextField
                    id="standard-basic-password"
                    type="password"
                    label="Enter Your Password" variant="standard"
                    name="password"
                    // onBlur={handleOnBlur}
                    sx={{ width: '100%', mb: 1 }} /><br />
                <Typography variant="body1" sx={{ color: 'red', cursor: 'pointer' }}>Forget Your Password?</Typography>
                <br />
                <Button variant="contained" className="customBgColor" type="submit" sx={{ mt: 3 }}>Login</Button>
                <Link to="/register" style={{ textDecoration: 'none' }} className="bgColor1"><Typography sx={{ mt: 3 }}>New User? Register Now</Typography></Link>
            </form>
        </Box >
    );
};

export default Login;