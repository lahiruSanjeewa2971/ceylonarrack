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
            controls={true}
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
        <div className='ourarrack-fourthsection'>
            <p>Today the distillery continues to make Ceylon Arrack and has never been more proud of it – an art handed down through four generations of family, an elixir derived from many more generations of coconut trees. Hold a bottle of Ceylon Arrack in your hand and feel its soul – born of nearly a hundred years of hard work, capturing the essence of a beautiful island in the Indian Ocean. </p>
        </div>
      </section>
      <section className='ourarrack-container'>
        <div className='ourarrack-fifthsection'>
            <div className='fifthsection-left'>
              <p>We believe in honest methods, in honesty in business, in paying our taxes and not always succumbing to the easy path. Integrity was one of our founding values, and one we still hold very dear. There is nothing hurried or mechanized about how the distillery makes arrack. Rather, it relies on the ancient art of sap collection, always done by hand, and a traditional distilling process that has stood the test of time.</p>
            </div>
            <div className='fifthsection-right'></div>
          </div>
      </section>
      <section className='ourarrack-container'>
        <div className='ourarrack-sixthsection'>
            <div className='sixthsection-left'></div>
            <div className='sixthsection-right'>
            <p>The result is a 100 per cent natural, wonderfully multifaceted coconut spirit that intrigues you, entices you, warms you and leaves you wanting more. The vision of our founders was to make high-quality arrack and introduce it to the world. We hope each taste of Ceylon Arrack inspires you to believe in your dreams, too. </p>
            </div>
          </div>
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