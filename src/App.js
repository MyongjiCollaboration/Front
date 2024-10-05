import React from 'react';
import './App.css';
import Login from './page/Login.js';
import AlbumDetail from './page/AlbumDetail.js';
import AlbumList from './page/AlbumList.js';
import Diary from './page/Diary.js';
import Home from './page/Home.js';
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
            <Route path='/diary' element={<Diary />} />
            <Route path='/home' element={<Home />} />
            <Route path='/albumList' element={<AlbumList />} />
            <Route path='/albumDetail/:id' element={<AlbumDetail />} />
            <Route path='/auth/signin' element={<Join />} />
          </Routes>
        </div>
        <BottomNav />
      </ThemeProvider>
    </Router>
  );
}

export default App;
