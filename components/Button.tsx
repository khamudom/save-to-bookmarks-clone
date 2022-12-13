import React, { ReactNode } from 'react';
import { MdOutlineRefresh } from 'react-icons/md';
import styles from '../styles/Button.module.css';

export interface ButtonProps {
  icon?: ReactNode;
  title?: string;
  width?: number;
  height?: number;
  active?: boolean;
}

export const Button = ({
  active,
  icon,
  title,
  width,
  height = 42,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${active ? `${styles.active}` : ''}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {icon} <span className={styles.title}>{title}</span>
    </button>
  );
};
