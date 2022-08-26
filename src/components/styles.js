import { styled } from '@mui/material/styles';

export const StyledAppWrapper = styled('div')({
  display: 'flex',
  height: '100%',
});

export const StyledGenreImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
}));
