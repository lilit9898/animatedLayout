import React from 'react';
import * as Section from '../sections';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <Section.HomeWelcome />
      <Section.VideoContainer />
      <Section.Introduction />
      <Section.ChaosAnimation />
    </div>
  );
};

export default Home;
