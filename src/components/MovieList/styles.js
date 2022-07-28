import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  marginRight: '240px',
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));
