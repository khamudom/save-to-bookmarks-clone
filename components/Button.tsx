import React, { ReactNode } from 'react';
import styles from '../styles/Button.module.css';

export interface ButtonProps {
  className?: string;
  color?: string;
  fill?: string;
  height?: number;
  icon?: ReactNode;
  selected?: boolean;
  title?: string;
  width?: number;
  onClick?: () => void;
}

export const Button = ({
  className,
  height = 42,
  icon,
  selected,
  title,
  width,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${
        selected ? `${styles.selected}` : ''
      } ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      onClick={onClick}
    >
      {icon} <span className={styles.title}>{title}</span>
    </button>
  );
};
