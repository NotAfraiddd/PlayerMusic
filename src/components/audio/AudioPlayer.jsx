import React, { useEffect, useRef, useState } from 'react';
import './AudioPlayer.css';
import ProcessCircle from './ProcessCircle';
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';

export default function AudioPLayer({ currentTrack, currentIndex, setCurrentIndex, total }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        // audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        // audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      // audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) => {
    return n > 9 ? '' + n : '0' + n;
  };
  const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  return (
    <div className="player-body flex w-full h-2/5 my-[3%]">
      <div className="player-body__left w-2/5">
        <ProcessCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0].url}
          size={300}
          color="#34fede"
        />
      </div>
      <div className="player-body__right flex justify-around items-center flex-col w-3/5">
        <p className="song-title text-center text-[58px] font-bold text-[#c4d0e3] overflow-hidden text-ellipsis line-clamp-2">
          {currentTrack?.name}
        </p>
        <p className="song-artist text-sm text-[#9aa9c2]">{artists?.join(' | ')}</p>
        <div className="player-body__right-bottom flex flex-col items-center w-full">
          <div className="song-duration w-1/2 flex justify-between items-center mb-5">
            <p className="duration text-xl font-bold text-[#c4d0e3]">0:01</p>
            <WaveAnimation isPlaying={true} />
            <p className="duration text-xl font-bold text-[#c4d0e3]">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
