import React from 'react';

export default function AlbumImage({ url }) {
  console.log(url);
  return (
    <div className="w-full">
      <div className="albumImage w-4/5">
        <img src={url} alt="Album art" className="albumImage-art" />
      </div>
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
}
