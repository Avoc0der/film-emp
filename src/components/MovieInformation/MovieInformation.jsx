import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useGetMovieQuery } from '../../services/TMDB';
import { StyledGrid, PosterImage, StyledGenresGrid, StyledGenresLink } from './styles';
import { StyledGenreImage } from '../styles';
import { imageTmdbLink } from '../../constants';

import genresIcons from '../../assets/genres';

export const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  console.log(data);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }

  return (
    <StyledGrid container>
      <Grid item sm={12} lg={4}>
        <PosterImage src={`${imageTmdbLink}${data?.poster_path}`} alt="Poster" />
      </Grid>
      <Grid item container lg={7} direction="column">
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data?.release_date.split('-')[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <StyledGrid item>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '10px' }}>
              {data?.vote_average} / 10
            </Typography>

          </Box>
          <Typography variant="h6" align="center" gutterBottom>{data?.runtime} min {data?.spoken_languages.length > 0 ? ` / ${data?.spoken_languages[0].name}` : ''}</Typography>
        </StyledGrid>
        <StyledGenresGrid item>
          {data?.genres?.map((genre) => (
            <StyledGenresLink key={genre.name} to="/" onClick={() => {}}>
              <StyledGenreImage sx={{ marginRight: '10px' }} src={genresIcons[genre.name.toLowerCase()]} height={30} />
              <Typography color="textPrimary" variant="subtitle1">{genre.name}</Typography>

            </StyledGenresLink>
          ))}
        </StyledGenresGrid>
      </Grid>
    </StyledGrid>
  );
};
