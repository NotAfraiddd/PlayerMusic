import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/Library';
import Feed from '../feed/Feed';
import Trending from '../trending/Trending';
import Player from '../player/Player';
import Favorite from '../favorite/Favorite';
import Sidebar from '../../components/sidebar/Sidebar';
import Login from '../auth/Login';
import './Home.css';
import { setClientToken } from '../../apis/spotify';
export default function Home() {
  const [isToken, setToken] = useState('');
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const hash = window.location.hash;
    window.location.hash = '';
    if (!token && hash) {
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', _token);
      setToken(_token); // using auto update when token is updated or is expired
      setClientToken(_token); // using for authentication in API requests
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !isToken ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body flex bg-primaryOrange">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  );
}
