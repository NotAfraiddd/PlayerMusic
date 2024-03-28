import React, { useEffect, useState } from 'react';
import apiClient from '../../apis/spotify';
import { useLocation } from 'react-router-dom';
import SongCard from '../../components/SongCard';
import Queue from '../../components/Queue';

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currrentTrack, setCurrrentTrack] = useState({});
  const [currrentIndex, setCurrrentIndex] = useState({});
  useEffect(() => {
    if (location.state) {
      apiClient.get('playlists/' + location.state?.id + '/tracks').then((res) => {
        setTracks(res.data.items);
        setCurrrentTrack(res.data.items[0].track);
      });
    }
  }, [location, location.state]);

  return (
    <div className="screen-container flex">
      <div className="right-player-body w-4/6">left</div>
      <div className="right-player-body w-2/6 flex flex-col justify-between">
        <SongCard album={currrentTrack.album} />
        <Queue />
      </div>
    </div>
  );
}
