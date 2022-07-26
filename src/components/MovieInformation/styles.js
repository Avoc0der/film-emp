import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '10px 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
}));

export const PosterImage = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: '0.5em 1em 1em rgb(64,64,70)',
  width: '80%',
  [theme.breakpoints.down('md')]: {
    margin: '0 auto',
    width: '50%',
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    width: '100%',
    height: '350px',
    marginBottom: '30px',
  },

}));

export const StyledGenresGrid = styled(Grid)(({ theme }) => ({
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}));

export const StyledGenresLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignCenter: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem 1rem',
  },

}));
