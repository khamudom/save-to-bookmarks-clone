import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from '../styles/Navbar.module.css';

export interface NavbarProps {
  active: boolean;
}

export const Navbar = ({ active }: NavbarProps) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navLink}>
          <div className={styles.navLeft}>
            <img
              className={styles.logo}
              src="/savetobookmarks.png"
              alt="save to bookmarks logo"
            />
            <div className={styles.links}>
              <a
                className={`${styles.link} ${active ? `${styles.active}` : ''}`}
                href="#"
              >
                Dashboard
              </a>
              <a className={styles.link} href="#">
                Import
              </a>
            </div>
          </div>
          <div className={styles.navRight}>
            <button className={styles.menu}>
              kam
              <FiChevronDown className={styles.menuIcon} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
