import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';

export const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/:username' element={<Profile />} />
    <Route path='*' element={<Error />} />
  </Routes>
);
