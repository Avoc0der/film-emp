import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { useSelector } from 'react-redux';

import { userSelector } from '../../features/auth';

export const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={handleLogout}>Logout &nbsp; <ExitToApp /></Button>
      </Box>
      {favoriteMovies.length === 0
        ? <Typography variant="h5">Add favorites or watchlist some movies to see them here!</Typography>
        : <Box>Favorites Movies</Box> }
    </Box>
  );
};
