import React from 'react';
import styles from './header.module.css';
import { NavBarItems } from './mock';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.NavBar}>
        {NavBarItems.map((item) => {
          return (
            <div key={item.id} className={styles.NavBarItem}>
              <a>
                {item.title}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Header;
