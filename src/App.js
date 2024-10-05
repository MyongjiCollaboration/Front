import React from 'react';
import './App.css';
import Login from './page/Login.js';
import { BrowserRouter as Router } from 'react-router-dom';
import BottomNav from './page/BottomNav.js';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div className='App'>
          <Login />
        </div>
        <BottomNav />
      </ThemeProvider>
    </Router>
  );
}

export default App;
