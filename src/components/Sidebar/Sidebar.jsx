import React, { useState, useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { StyledLink, StyledImage, StyledGenreImage, StyledCategoriesLink } from './styles';
import { useGetGenresQuery } from '../../services/TMDB';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import genresIcons from '../../assets/genres';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

export const Sidebar = ({ setMobileOpen }) => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const { data, isFetching } = useGetGenresQuery();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleListItemClick = (item) => {
    dispatch(selectGenreOrCategory(item));
  };

  return (
    <>
      <StyledLink to="/">
        <StyledImage src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="" />
      </StyledLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <StyledCategoriesLink key={value} to="/">
            <ListItem onClick={() => handleListItemClick(value)} button>
              <ListItemIcon>
                <StyledGenreImage src={genresIcons[label.toLowerCase()]} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />

            </ListItem>
          </StyledCategoriesLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching
          ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          )
          : data?.genres.map(({ id, name }) => (
            <StyledCategoriesLink key={id} to="/">
              <ListItem onClick={() => handleListItemClick(id)} button>
                <ListItemIcon>
                  <StyledGenreImage src={genresIcons[name.toLowerCase()]} height={30} />
                </ListItemIcon>
                <ListItemText primary={name} />

              </ListItem>
            </StyledCategoriesLink>
          ))}
      </List>
    </>
  );
};
