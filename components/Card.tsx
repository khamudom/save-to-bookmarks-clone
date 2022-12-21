import React, { ReactNode } from 'react';
import styles from '../styles/Card.module.css';
import { CiHeart } from 'react-icons/ci';
import { AiOutlineRetweet, AiFillStar } from 'react-icons/ai';
import { TbTags } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';

export interface CardProps {
  className: string;
  avatar: string | undefined;
  name: string | undefined;
  handle: string | undefined;
  tweet: string | undefined;
  like: string | undefined;
  retweet: string | undefined;
  timeStamp: string | undefined;
}

export const Card = ({
  avatar,
  className,
  handle,
  name,
  tweet,
  like,
  retweet,
  timeStamp,
}: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        <div className={styles.user}>
          <img className={styles.avatar} src={avatar} />
          <div className={styles.userTitles}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.handle}>{handle}</div>
          </div>
        </div>
        <div className={styles.action}>
          <button className={styles.actionBtn}>
            <TbTags />
          </button>
          <button className={styles.actionBtn}>
            <AiFillStar className={styles.favoriteIcon} />
          </button>
          <button className={styles.actionBtn}>
            <RiDeleteBinLine className={styles.deleteIcon} />
          </button>
        </div>
      </div>
      <a className={styles.tweet} href="#">
        <span className={styles.tweet}>{tweet}</span>
      </a>
      <div className={styles.footer}>
        <div className={styles.reactions}>
          <div className={styles.like}>
            <CiHeart />
            <span>{like}</span>
          </div>
          <div className={styles.retweet}>
            <AiOutlineRetweet />
            <span>{retweet}</span>
          </div>
        </div>
        <div className={styles.dateTime}>
          <span>{timeStamp}</span>
        </div>
      </div>
    </div>
  );
};
