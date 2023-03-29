import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './chaosAnimation.module.css';
import images from './mockDB/index';

function getLocation(time = 0) {
  return images.map((item, i) => {
    return {
      [`virus${i + 1}top`]: time ? Math.round(Math.random() * time) : 0,
      [`virus${i + 1}left`]: time ? Math.round(Math.random() * time) : 0,
    };
  });
}

const ChaosAnimation = () => {
  const [viruses, setViruses] = useState(getLocation());

  useEffect(() => {
    setInterval(() => {
      setViruses(getLocation(1500));
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      {viruses.map((item, i) => {
        return (
          <Image
            src={images[i]}
            alt={`virus${i + 1}`}
            style={{
              top: Object.values(item)[0],
              left: Object.values(item)[1],
            }}
            width={50}
            height={50}
            className={styles.img}
          />
        );
      })}

      <div className={styles.text}>
        <h1>Toxic Environment</h1>
      </div>
    </div>
  );
};

export default ChaosAnimation;
