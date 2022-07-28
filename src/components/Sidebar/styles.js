import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',

});

export const StyledImage = styled('img')({
  width: '70%',
});
export const StyledGenreImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
}));
export const StyledCategoriesLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));
