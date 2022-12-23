import React from 'react';
import styles from '../styles/Flyout.module.css';

export interface FlyoutProps {
  className?: string;
}

export const Flyout = ({ className }: FlyoutProps) => {
  return (
    <div className={`${className} ${styles.flyout}`}>
      <div className={styles.content}>
        <div className={styles.title}>Manage Account</div>
        <button className={styles.btn}>Profile</button>
        <button className={styles.btn}>Log Out</button>
      </div>
    </div>
  );
};
