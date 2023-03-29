import React, { useRef, useState } from 'react';
import styles from './video.module.css';
import VideoPlayer from './subComponents/VideoPlayer';

const VideoContainer = () => {
  return (
    <section className={styles.videoContainer}>
      <VideoPlayer />
    </section>
  );
};

export default VideoContainer;
