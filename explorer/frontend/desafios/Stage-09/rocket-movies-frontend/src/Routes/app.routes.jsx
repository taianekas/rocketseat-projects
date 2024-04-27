import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { CreateMovie } from '../Pages/CreateMovie';
import { MoviePreview } from '../Pages/MoviePreview';

export const AppRoutes = () => {
  return (
    <Routes>

      <Route path = '/' element = {<Home />} />
      <Route path = '/profile' element = {<Profile />} />
      <Route path = '/createmovie' element = {<CreateMovie />} />
      <Route path = '/moviepreview/:id' element = {<MoviePreview />} />

    </Routes>
  )
}

