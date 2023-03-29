import Link from 'next/link';
import React from 'react';
import styles from './footer.module.css';
import { footerNavBar } from './mock';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerBarContainer}>
      <div className={styles.NavBar}>
        {footerNavBar.map((item) => {
          return <div className={styles.NavBarItem}>{item.text}</div>;
        })}
      </div>

      <div className={styles.linkBar}>
        <div className={styles.link}>
          <Link href="google.com">vk</Link>
        </div>
        <div className={styles.link}>
          <Link href="google.com">telegram</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
