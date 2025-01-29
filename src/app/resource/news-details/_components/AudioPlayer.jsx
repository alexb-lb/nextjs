import React, { useState, useRef, useEffect } from "react";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (progressRef.current) {
        progressRef.current.value = (audio.currentTime / audio.duration) * 100;
      }
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const value = e.target.value;
    audio.currentTime = (value / 100) * audio.duration;
  };

  return (
    <div className="w-full md:w-[660px] h-[48px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-full flex items-center p-2 space-x-5">
      <img
        loading="lazy"
        // src={isPlaying ? "/images/resource/pause.svg" : "/images/resource/musicplay.svg"}
        src="/images/resource/musicplay.svg"
        alt="play-pause"
        className="cursor-pointer ml-4"
        onClick={togglePlayPause}
      />

      <audio ref={audioRef} src="/path/to/your-audio-file.mp3" />

      {/* Progress Bar */}
      <input
        ref={progressRef}
        type="range"
        min="0"
        max="100"
        step="1"
        className="flex-grow"
        onChange={handleProgressChange}
      />

      {/* Timer */}
      <div className="text-sm text-gray-500 p-2">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );
}

export default AudioPlayer;
