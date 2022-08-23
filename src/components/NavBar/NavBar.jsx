import React, { useState, useEffect } from 'react';
import { AppBar, IconButton, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../Search/Search';
import { Sidebar } from '../Sidebar/Sidebar';
import { StyledDrawer, StyledLinkButton, StyledToolbar } from './styles';

import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { setUser, userSelector } from '../../features/auth';

export const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeObject = useTheme();

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);

          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>

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
              <Button color="inherit" onClick={fetchToken}>Login &nbsp; <AccountCircle /></Button>
            ) : (
              <StyledLinkButton color="inherit" component={Link} to={`/profile/${user.id}`} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" src="https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png" />
              </StyledLinkButton>
            )}
          </div>
          {isMobile && <Search />}
        </StyledToolbar>
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
