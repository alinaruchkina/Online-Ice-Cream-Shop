import React from 'react';
import styles from './header.module.css';
import logo from '../../utils/images/logo.png';

function Header() {
  const nav = ['Home', 'Collection', 'Shop', 'Natural', 'Candys', 'Shooters', 'Pages'];
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src={logo} alt="logo" />
        <la className={styles.header__list}>
          {nav.map((item, index) => (
            <li key={index} className={styles.header__list_block}>
              {item}
            </li>
          ))}
        </la>
      </div>
    </div>
  );
}

export default Header;
