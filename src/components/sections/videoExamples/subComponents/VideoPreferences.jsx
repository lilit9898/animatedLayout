import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../video.module.css';
import playIconSVG from '../../chaosAnimation/images/play.svg';
import pauseIconSVG from '../../chaosAnimation/images/pause.svg';
import soundSVG from '../../chaosAnimation/images/sound.svg';

const VideoPreferences = (props) => {
  const [sliderVal, setSliderVal] = useState(0);
  // console.log(props.handleVideo, 'props ');

  const handleInputChange = () => {
    setSliderVal(event.target.value);
  };

  // const handlemanageSoundInputChange = () => {
  //   setSound((event) => event.target.value);
  // };

  return (
    <div className={styles.prefContainer}>
      <div className={styles.videoTimeManager}>
        <div>start</div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          onChange={handleInputChange}
          className={styles.videoRangeInput}
        ></input>
        <div>end</div>
      </div>
      <div className={styles.preferences}>
        <div className={styles.volumePart}>
          {props.paused ? (
            <Image
              alt="pauseIcon"
              src={pauseIconSVG}
              width={20}
              height={20}
              onClick={props.handleVideo}
            />
          ) : (
            <Image
              alt="playIcon"
              src={playIconSVG}
              width={20}
              height={20}
              onClick={props.handleVideo}
            />
          )}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image alt="soundIcon" src={soundSVG} width={25} height={25} />
            <input
              type="range"
              min="0"
              max="100"
              value={props.sound}
              onChange={(event) => props.setSound(event.target.value / 1000)}
              className={styles.soundRangeInput}
            ></input>
          </div>
        </div>
        <div style={{ color: 'black' }}>nastroyki</div>
      </div>
    </div>
  );
};

export default VideoPreferences;
