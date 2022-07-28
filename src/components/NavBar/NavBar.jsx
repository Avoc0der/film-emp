import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Search } from '../Search/Search';
import { Sidebar } from '../Sidebar/Sidebar';
import { StyledDrawer, StyledLinkButton } from './styles';

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeObject = useTheme();
  const isAuthenticated = true;

  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={(theme) => ({
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '240px',
          [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            flexWrap: 'wrap',
          },
        })}
        >
          {isMobile && (
          <IconButton
            sx={(theme) => ({ mr: 2, [theme.breakpoints.up('sm')]: { display: 'none' } })}
            onClick={() => setMobileOpen((prev) => !prev)}
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {themeObject.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>Login &nbsp; <AccountCircle /></Button>
            ) : (
              <StyledLinkButton color="inherit" component={Link} to="/profile/:id" onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" src="https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png" />
              </StyledLinkButton>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav>
          {isMobile ? (
            <StyledDrawer variant="temporary" anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} ModalProps={{ keepMounted: true }}>
              <Sidebar setMobileOpen={setMobileOpen} />
            </StyledDrawer>
          ) : (
            <StyledDrawer variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </StyledDrawer>
          )}
        </nav>
      </div>
    </>
  );
};
