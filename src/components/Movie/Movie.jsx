import React from 'react';
import { Grid, Grow, Tooltip, Rating } from '@mui/material';
import { StyledTypography, StyledImage, StyledLink } from './styles';
import { imageTmdbLink } from '../../constants';

const thumbnailImageLink = 'https://www.fillmuray.com/200/300';

export const Movie = ({ movie, i }) => {
  const imageSrc = movie.poster_path ? `${imageTmdbLink}${movie.poster_path}` : thumbnailImageLink;
  return (
    <Grid
      sx={{ padding: '10px' }}
      item
    >
      <Grow in key={i} timeout={250 * (i + 1)}>
        <StyledLink to={`/movie/${movie.id}`}>
          <StyledImage alt={movie.title} src={imageSrc} />
          <StyledTypography variant="h5">{movie.title}</StyledTypography>
          <Tooltip placement="top" disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </StyledLink>

      </Grow>
    </Grid>
  );
};
