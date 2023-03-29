import React from 'react';
import { useState, useCallback } from 'react';
import styles from './patron.module.css';



const PatronAnimation = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = useCallback((e: any) => {
    const followX = window.innerWidth / 2 - e.clientX;
    const followY = window.innerHeight / 3 - e.clientY;
    const friction = 1 / 32;
    let x = 0,
      y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;
    setOffsetX(x);
    setOffsetY(y);
  }, []);

  const offset = {
    transform: `perspective(500px) rotateY(${offsetX}deg) rotateX(${offsetY}deg)`,
  };

  return (
    <div
      className={styles.brendNameContainer}
      style={offset}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.brandName}>Proton</div>
    </div>
  );
};

export default PatronAnimation;
