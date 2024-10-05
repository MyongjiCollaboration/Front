import React from 'react';
import './App.css';
import Login from './page/Login.js';
import Album from './page/Album.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav.js';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';
import Join from './page/Join.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/album' element={<Album />} />
            <Route path='/auth/signin' element={<Join />} />
          </Routes>
        </div>
        <BottomNav />
      </ThemeProvider>
    </Router>
  );
}

export default App;
