import React, { ReactNode } from 'react';
import { MdOutlineRefresh } from 'react-icons/md';
import styles from '../styles/Button.module.css';

export interface ButtonProps {
  icon?: ReactNode;
  title?: string;
  width?: number;
  height?: number;
  selected?: boolean;
  onClick?: () => void;
}

export const Button = ({
  selected,
  icon,
  title,
  width,
  height = 42,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${selected ? `${styles.selected}` : ''}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={onClick}
    >
      {icon} <span className={styles.title}>{title}</span>
    </button>
  );
};
