import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Login from '../Login/Login';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <Box className="home">
            <Box>
                <Navigation />
                <Login />
            </Box>
        </Box >
    );
};

export default Home;