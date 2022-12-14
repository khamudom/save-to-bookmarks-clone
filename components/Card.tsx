import React from 'react';
import styles from '../styles/Card.module.css';

export interface CardProps {
  className: string;
}

export const Card = ({ className }: CardProps) => {
  return <div className={`${styles.card} ${className}`}></div>;
};
