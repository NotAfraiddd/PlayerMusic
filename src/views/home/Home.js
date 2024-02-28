import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../Library';
import Feed from '../Feed';
import Trending from '../Trending';
import Player from '../Player';
import Favorite from '../Favorite';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
export default function Home() {
  return (
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
