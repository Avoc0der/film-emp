import { Drawer, Button, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

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
