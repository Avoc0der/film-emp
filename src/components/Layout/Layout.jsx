import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { StyledToolBar, StyledContent } from './styles';

export const Layout = () => (
  <>
    <NavBar />
    <StyledContent>
      <StyledToolBar />
      <Outlet />
    </StyledContent>
  </>
);
