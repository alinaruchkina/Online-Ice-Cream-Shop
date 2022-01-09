import React from 'react';
import styles from './index.module.css';
import logo from '../../utils/images/logo.png';
import ice_cream2 from '../../utils/images/ice-cream2.jpg';
import icon from '../../utils/images/icon.png';

function Main() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.header}>
          <img src={logo} alt="logo" />
          <la className={styles.list}>
            <li className={styles.block}>Home</li>
            <li className={styles.block}>Collection</li>
            <li className={styles.block}>Shop</li>
            <li className={styles.block}>Natural</li>
            <li className={styles.block}>Candys</li>
            <li className={styles.block}>Shooters</li>
            <li className={styles.block}>Pages</li>
          </la>
        </div>
      </div>
      <div>
        <img src={ice_cream2} alt="ice_cream" />
        <div className={styles.slider_content}>
          <div className={styles.slide}>
            <img src={icon} alt="icon" />
            <div>Best Choise</div>
            <div>YUMMY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
