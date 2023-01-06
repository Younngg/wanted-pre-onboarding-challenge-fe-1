import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { Container } from './styles/page';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

function App() {
  return (
    <div className='App'>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/auth' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
