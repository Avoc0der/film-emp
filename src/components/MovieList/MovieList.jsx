import React from 'react';
import { Movie } from '../Movie/Movie';
import { StyledGrid } from './styles';

export const MovieList = ({ movies }) => {
  console.log('MovieList');
  return (
    <StyledGrid container>
      {movies?.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </StyledGrid>
  );
};
