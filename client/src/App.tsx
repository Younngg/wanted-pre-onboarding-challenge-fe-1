import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { Container } from './styles/page';
import axios from 'axios';
import Home from './pages/Home';
import Detail from './pages/Detail';

axios.defaults.baseURL = 'http://localhost:8080';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path=':id' element={<Detail />} />
          </Route>
          <Route path='/auth' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
