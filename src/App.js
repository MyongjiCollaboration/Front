import React from 'react';
import './App.css';
import Login from './page/Login.js';
import Album from './page/Album.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav.js';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div className='App'>
          <Routes>
<<<<<<< HEAD
            <Route path='/home' element={<Login />} />
=======
            <Route path='/' element={<Login />} />
>>>>>>> 25516e1241473cecbe154f03889c9aa5cb16fd78
            <Route path='/album' element={<Album />} />
          </Routes>
        </div>
        <BottomNav />
      </ThemeProvider>
    </Router>
  );
}

export default App;
