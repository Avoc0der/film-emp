import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import { searchMovie } from '../../features/currentGenreOrCategory';

import { SearchContainer, StyledTextField } from './styles';

export const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  return (
    <SearchContainer>
      <StyledTextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
};
