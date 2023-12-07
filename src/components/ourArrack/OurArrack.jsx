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
    <div className='outer-container'>
      <section className='ourarrack-container'>
          <ReactPlayer
            className="video"
            url="https://player.vimeo.com/video/103451402"
            width="100%"
            height="100%"
            playing={isPlaying}
            volume={isMuted ? 0 : 0.5}
            controls={false}
            onEnded={() =>{
              console.log("ended")
            }}
            config={{
              file: {
                attributes: {
                  playsInline: true,
                }
              }
            }}
            />
      </section>
      <section className='ourarrack-container'>
        <div className='ourarrack-secondsection'>
            <h2>Taken from trees</h2>
        </div>
      </section>
      <section className='ourarrack-container'>
        <div className='ourarrack-thirdsection'>
          <div className='thirdsection-left'>
              <p>Back in the early 1900s, in Sri Lanka, there was no such thing as high-quality arrack. Despite being an ancient, mystical spirit, first written about by Marco Polo in the 13th century, it was never considered to be finely made, or even particularly palatable. </p>
          </div>
          <div className='thirdsection-right'></div>  
        </div>
      </section>
      <section className='ourarrack-container'>
        4
      </section>
      <section className='ourarrack-container'>
        5
      </section>
    </div>
  )
}

export default OurArrack

    // <div className='ourarrack-container'>
    //   <div className='video-container'>
    //     <ReactPlayer
    //     className="react-player"
    //     url="https://player.vimeo.com/video/103451402"
    //     width="1400px"
    //     height="700px"
    //     playing={isPlaying}
    //     volume= {isMuted ? 0 : 0.5}
    //     controls={false}
    //     onEnded={() => {
    //       console.log("ended")
    //     }}
    //     config={{
    //       file: {
    //         attributes: {
    //           playsInline: true,
    //         },
    //       },
    //     }}
    //     />
    //   </div>
    //   <div className='bottom-panel'>
    //     <Button variant="secondary"
    //     className={`control-play-button ${isPlaying ? "pause" : "play"}`}
    //     onClick={handlePlayPause}
    //     startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
    //     >
    //       {isPlaying ? "Pause" : "Play"}
    //     </Button>
    //     <Button variant="secondary"
    //     className={`control-button ${isMuted ? "unmute" : "mute"}`}
    //     onClick={handleMuteUnmute}
    //     startIcon={isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
    //     >
    //       {isMuted ? "Unmute": "Mute"}
    //     </Button>
    //   </div>
    
    // </div>