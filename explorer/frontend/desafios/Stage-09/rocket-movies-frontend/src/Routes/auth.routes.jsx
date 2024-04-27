import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../Pages/SignUp';


export const AuthRoutes = () => {
  return (
    <Routes>

      <Route path = '/' element = {<SignIn />} />
      <Route path = '/register' element = {<SignUp />} />

    </Routes>
  )
}

