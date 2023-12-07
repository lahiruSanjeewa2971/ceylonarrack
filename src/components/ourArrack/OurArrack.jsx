import React, { useRef, useState } from 'react'
import './ourarrack.css'
import ReactPlayer from 'react-player';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Button from '@mui/material/Button';

function OurArrack() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className='ourarrack-container'>
      <div className='video-container'>
        <ReactPlayer
        className="react-player"
        url="https://player.vimeo.com/video/103451402"
        width="1400px"
        height="700px"
        playing={isPlaying}
        volume= {isMuted ? 0 : 0.5}
        controls={false}
        onEnded={() => {
          console.log("ended")
        }}
        config={{
          file: {
            attributes: {
              playsInline: true,
            },
          },
        }}
        />
      </div>
      <div className='bottom-panel'>
        <Button variant="secondary"
        className={`control-play-button ${isPlaying ? "pause" : "play"}`}
        onClick={handlePlayPause}
        startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button variant="secondary"
        className={`control-button ${isMuted ? "unmute" : "mute"}`}
        onClick={handleMuteUnmute}
        startIcon={isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        >
          {isMuted ? "Unmute": "Mute"}
        </Button>
      </div>
    
    </div>
  )
}

export default OurArrack