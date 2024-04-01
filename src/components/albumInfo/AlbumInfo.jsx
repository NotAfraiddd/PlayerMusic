import React from 'react';
import './AlbumInfo.css';
export default function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((e) => {
    artists.push(e.name);
  });
  return (
    <div className="albumInfo-card xl:w-[70%] mt-[25px] text-[#c3d0e3] bg-[#27354d] rounded-[30px] rounded-br-none">
      <div className="album-name w-full overflow-hidden text-xl font-bold">
        <div className="marquee">
          <p>{album?.name + ' - ' + artists?.join(', ')}</p>
        </div>
      </div>
      <div className="album-info text-sm mt-2">
        <p>{`${album?.name} is an ${album?.album_type} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album-release text-xs mt-2">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}
