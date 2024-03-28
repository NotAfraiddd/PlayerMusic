import React from 'react';
import AlbumImage from './AlbumImage';
import AlbumInfo from './AlbumInfo';

export default function SongCard({ album }) {
  return (
    <div className="w-full h-3/5 bg-[#27354d] rounded-[30px] rounded-br-none">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}
