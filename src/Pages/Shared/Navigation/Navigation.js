import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box>
            <img src="https://i.ibb.co/02NLsD5/logo.png" alt="Logo" className="logo" />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" className="textColor1">
                    <Link to="/" className="navHover">Login</Link>
                </Typography>
                <Box className="circleDivider"></Box>
                <Typography variant="h5" className="textColor1">
                    <Link to="/register" className="navHover">Register</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Navigation;