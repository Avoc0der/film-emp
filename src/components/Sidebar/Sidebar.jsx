import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledLink, StyledImage, StyledGenreImage, StyledCategoriesLink } from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

export const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();

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
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <StyledGenreImage src={redLogo} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />

            </ListItem>
          </StyledCategoriesLink>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <StyledCategoriesLink key={value} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <StyledGenreImage src={redLogo} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />

            </ListItem>
          </StyledCategoriesLink>
        ))}
      </List>
    </>
  );
};