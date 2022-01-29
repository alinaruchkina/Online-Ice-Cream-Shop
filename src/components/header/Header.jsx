import React from 'react';
import styles from './header.module.css';
import logo from '../../utils/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useSelector } from 'react-redux';

function Header() {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link to="/">
          <img className={styles.cake} src={logo} alt="logo" />
        </Link>
        <div className={styles.header__list}>
          <NavLink to="/home" className={styles.header__link} activeClassName={styles.activeList}>
            <li className={styles.header__list_block}>Home</li>
          </NavLink>
          <NavLink to="/cards" className={styles.header__link} activeClassName={styles.activeList}>
            <li className={styles.header__list_block}>Collection</li>
          </NavLink>
          <NavLink to="/orders" className={styles.header__link} activeClassName={styles.activeList}>
            <li className={styles.header__list_block}>Orders</li>
          </NavLink>
        </div>
        <div className={styles.header__list}>
          <Link className={styles.header__basket} to="/orders">
            <div className={styles.header__basket_box}>
              <LocalGroceryStoreOutlinedIcon sx={{ color: '#f06b9a', width: 30, height: 30 }} />
              <div className={styles.basket_amount}>{orders.length}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
