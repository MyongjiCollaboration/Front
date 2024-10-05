import React from 'react';
import './App.css';
import Login from './page/Login.js';
import AlbumDetail from './page/AlbumDetail.js';
import AlbumList from './page/AlbumList.js';
import Diary from './page/Diary.js';
import Schedule from './page/Schedule.js';
import Home from './page/home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav.js';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.js';
import Join from './page/Join.js';
import MyPage from './page/MyPage.js';
import Detail from './page/Detail.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/diary' element={<Diary />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/home' element={<Home />} />
            <Route path='/albumList' element={<AlbumList />} />
            <Route path='/albumDetail/:id' element={<AlbumDetail />} />
            <Route path='/auth/signin' element={<Join />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/family-name-edit' element={<Detail />} />
          </Routes>
        </div>
        <BottomNav />
      </ThemeProvider>
    </Router>
  );
}

export default App;
