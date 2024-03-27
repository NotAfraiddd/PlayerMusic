import React, { useEffect, useState } from 'react';
import apiClient from '../../apis/spotify';
import './Library.css';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    apiClient.get('me/playlists').then((res) => {
      setPlaylists(res.data.items);
    });
  }, []);

  const navigate = useNavigate();
  const playMusic = (id) => {
    navigate('/player', { state: { id: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body overflow-y-auto grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-[3%] h-[90%] w-full">
        {playlists?.map((item) => (
          <div
            className="playlist-card relative border-white bg-primaryBorder rounded-[20px] border w-[75%]"
            key={item.id}
            onClick={() => playMusic(item.id)}
          >
            <img src={item.images[0].url} className="playlist-image " alt="Playlist-Art" />
            <span className="playlist-title text-base line-clamp-2 text-[#c4d0e37c] text-ellipsis font-extrabold">
              {item.name}
            </span>
            <span className="playlist-subtitle text-sm text-[#c4d0e37c]">{item.tracks.total} Songs</span>
            <div className="playlist-fade absolute bottom-0 right-0 opacity-0">
              <IconContext.Provider value={{ size: '50px', color: '#E99D72' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
