import React from 'react';
import { Movie } from '../Movie/Movie';
import { StyledGrid } from './styles';

export const MovieList = ({ movies }) => (
  <StyledGrid container>
    {movies?.results.map((movie, i) => (
      <Movie key={movie.id} movie={movie} i={i} />
    ))}
  </StyledGrid>
);
