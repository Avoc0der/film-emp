import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledTypography } from './styles';

export const Movie = ({ movie, i }) => {
  console.log('movie', movie);
  return (
    <Grid sx={{ padding: '10px' }} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <StyledTypography variant="h5">{movie.title}</StyledTypography>
    </Grid>
  );
};
