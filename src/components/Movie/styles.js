import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '230px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: 0,
  textAlign: 'center',
}));

export const StyledImage = styled('img')({
  borderRadius: '20px',
  // height: '300px',
  width: '100%',
  marginBottom: '10px',
  transition: 'all 0.3s ease-out',
  '&:hover': {
    transform: 'scale(1.05)',

  },

});

export const StyledLink = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  fontWeight: 'bolder',
  textDecoration: 'none',

  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
  },

}));
