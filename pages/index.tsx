import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MdOutlineRefresh } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FiGrid, FiList } from 'react-icons/fi';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useState } from 'react';

export enum FeedLayout {
  Grid = 'Grid',
  List = 'List',
}

export default function Home() {
  const [layout, setLayout] = useState<FeedLayout>(FeedLayout.Grid);

  function handleFeedLayout(feed: FeedLayout) {
    if (feed === layout) {
      return;
    }
    setLayout(feed);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Clone - Save To Bookmarks</title>
        <meta name="description" content="A clone of save to bookmarks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar active={true} />
      <header className={styles.header}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>Dashboard</h2>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.customize}>
            <div className={styles.bookmark}>10 bookmark(s)</div>
            <div className={styles.btnFilter}>
              <Button
                icon={<MdOutlineRefresh className={styles.icon} />}
                title={'Refresh'}
              />
              <Button title={'Show Tags'} />
              <Button
                icon={<BsPerson className={styles.icon} />}
                title={'Authors'}
              />
            </div>
          </div>

          <div className={styles.tags}></div>

          <div className={styles.btnLayout}>
            <Button
              width={42}
              icon={<FiList className={styles.icon} />}
              selected={layout === FeedLayout.List}
              onClick={() => {
                handleFeedLayout(FeedLayout.List);
              }}
            />
            <Button
              width={42}
              icon={<FiGrid className={styles.icon} />}
              selected={layout === FeedLayout.Grid}
              onClick={() => handleFeedLayout(FeedLayout.Grid)}
            />
          </div>
          <div
            className={`${styles.feed} ${
              layout === FeedLayout.Grid
                ? `${styles.layoutGrid}`
                : `${styles.layoutList}`
            }`}
          >
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
            <Card
              className={`${
                layout === FeedLayout.Grid
                  ? `${styles.cardGrid}`
                  : `${styles.cardList}`
              }`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
