import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CheckAuth from './CheckAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <CheckAuth>
              <Home />
            </CheckAuth>
          }
        >
          <Route path=':id' element={<Detail />} />
        </Route>
        <Route
          path='/auth'
          element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path='/auth/register'
          element={
            <CheckAuth>
              <Register />
            </CheckAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
