import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Movies, MovieInformation, ActorInformation, ProfileInformation } from '.';
import { Layout } from './Layout/Layout';
import { StyledAppWrapper } from './styles';

const App = () => (
  <StyledAppWrapper>
    <CssBaseline />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Movies />} />
        <Route path="movie/:id" element={<MovieInformation />} />
        <Route path="actor/:id" element={<ActorInformation />} />
        <Route path="profile/:id" element={<ProfileInformation />} />
        <Route path="*" element={<h1>Route not match!</h1>} />
      </Route>
    </Routes>
  </StyledAppWrapper>
);

export default App;
