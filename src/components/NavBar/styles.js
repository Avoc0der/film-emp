import { Drawer, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

export const StyledNav = styled('nav')({
  display: 'flex',
  height: '100%',
});

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
  },
}));

export const StyledLinkButton = styled(Button)({
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none',
  },
});
