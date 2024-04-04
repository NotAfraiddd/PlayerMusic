import React from 'react';
import './Queue.css';
export default function Queue({ tracks, setCurrrentTrack }) {
  console.log(tracks);
  return (
    <div className="h-[35%] flex flex-col justify-center items-center opacity-100 w-full queue-container rounded-[30px] rounded-tr-none bg-[#3e61d2]">
      <div className="queue flex h-[85%] font-weight flex-col justify-between">
        <span className="update-next text-xl text-white">Up next</span>
        <div className="queue-list h-4/5 overflow-y-auto">
          {tracks.map((track) => (
            <div className="queue-item flex justify-between w-full px-1 text-sm text-white">
              <p className="track-name">{track?.track?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
