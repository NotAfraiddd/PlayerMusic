import React from 'react';
import './Queue.css';
export default function Queue({ src, className }) {
  return (
    <div className="h-[35%] flex flex-col justify-center items-center opacity-100 w-full queue-container rounded-[30px] rounded-tr-none bg-[#3e61d2]">
      <div className="queue flex h-[85%] font-weight flex-col justify-between">
        <span className="update-next text-xl text-white">Up next</span>
        <div className="queue-list"></div>
      </div>
    </div>
  );
}
