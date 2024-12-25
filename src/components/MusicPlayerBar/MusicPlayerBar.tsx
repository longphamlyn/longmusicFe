import React, { useState, useRef } from 'react'; // Tạo file CSS riêng cho thanh phát nhạc

const MusicPlayerBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
      setCurrentTime(Number(event.target.value));
    }
  };

  return (
    <div className="music-player-bar">
      <audio
        ref={audioRef}
        src="https://example.com/path-to-music-file.mp3" // Thay bằng URL bài hát của bạn
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <div className="player-controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <span className="time-display">
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / 
          {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
        </span>
        <input
          type="range"
          min="0"
          max={duration.toString()}
          value={currentTime.toString()}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

export default MusicPlayerBar;
