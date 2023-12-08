import React, {useState} from 'react'
import './home.css'
import ReactPlayer from 'react-player';


function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className='home-container'>
      <section className='video-container'>
        <ReactPlayer
          className="video"
          url="https://www.ceylonarrack.com/wp-content/uploads/2014/07/treetrunk_small.mp4"
          width="100%"
          height="100%"
          playing={isPlaying}
          volume={isMuted ? 0 : 0.5}
          controls={false}
          onEnded={() => {
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
    </div>
  )
}

export default Home