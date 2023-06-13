import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { VscHeart } from 'react-icons/vsc';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationList_item}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)}
          >
            Movies
          </NavLink>
        </li>

        <li>
          <div className={styles.ukraineContainer}>
            <a href="#!" className={styles.ukraine}>
              We stand with Ukraine
              <span className={styles.heartLogo}>
                <VscHeart />
              </span>
            </a>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
