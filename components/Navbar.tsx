import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from '../styles/Navbar.module.css';

export interface NavbarProps {
  active?: boolean;
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
              <Link id="navLink" className={styles.link} href="/">
                Dashboard
              </Link>
              <Link id="navLink" className={styles.link} href="/import">
                Import
              </Link>
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
