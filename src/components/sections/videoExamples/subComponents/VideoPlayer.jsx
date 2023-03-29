import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styles from '../video.module.css';
import VideoPreferences from './VideoPreferences';
import playIconSVG from '../../chaosAnimation/images/play.svg';

const VideoPlayer = () => {
  const [paused, setPaused] = useState(true);
  const [sound, setSound] = useState(0);

  useEffect(() => {
    videoRef.current.volume = sound;
  }, [sound]);

  const videoRef = useRef(null);
  const handleVideo = () => {
    console.log('jjjj');
    !paused ? videoRef.current.play() : videoRef.current.pause();
    setPaused(!paused);
    // console.log(videoRef  );
    //currentTime
    //duretion
    //ended
    //paused
  };
  return (
    <div className={styles.playerContainer}>
      <video
        paused={paused}
        ref={videoRef}
        width="100%"
        autoPlay
        preload="auto"
        loop
        style={{ borderRadius: '25px', width: '100%', height: '500px' }}
        onClick={handleVideo}
        src={'/video.mp4'}
      >
        {/* <source src="public/videos/video.mp4" type="video/mp4" /> */}
      </video>
      <button className={styles.btn}>
        {paused ? null : (
          <Image alt="playIcon" src={playIconSVG} width={60} height={60} />
        )}
      </button>
      <VideoPreferences
        handleVideo={handleVideo}
        paused={paused}
        sound={sound}
        videoRef={videoRef}
        setSound={setSound}
      />
    </div>
  );
};

export default VideoPlayer;

//https://dl.dropboxusercontent.com/s/d1gkk6l4y5uus7f/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%281%29.mp4?dl=
