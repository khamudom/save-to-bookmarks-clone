import React, { ReactNode } from 'react';
import styles from '../styles/Card.module.css';

export interface CardProps {
  className: string;
  children: ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
