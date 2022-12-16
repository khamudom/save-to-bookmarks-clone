import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MdOutlineRefresh } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FiGrid, FiList } from 'react-icons/fi';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useEffect, useState } from 'react';
import Bookmarks from '../data.json';

export enum FeedLayout {
  Grid = 'Grid',
  List = 'List',
}

export default function Home() {
  const [layoutType, setLayoutType] = useState<FeedLayout>(FeedLayout.Grid);
  const [tag, setTag] = useState<boolean>(false);
  const [floatingHeader, setFloatingHeader] = useState<boolean>(false);

  function handleFeedLayout(feed: FeedLayout) {
    if (feed === layoutType) {
      return;
    }
    setLayoutType(feed);
  }

  function handleTag() {
    setTag(!tag);
  }

  function reloadPage() {
    location.reload();
  }

  useEffect(() => {
    const controlFloatingHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 400) {
          setFloatingHeader(true);
        } else {
          setFloatingHeader(false);
        }
      }
    };

    window.addEventListener('scroll', controlFloatingHeader);

    return () => {
      window.removeEventListener('scroll', controlFloatingHeader);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Clone - Save To Bookmarks</title>
        <meta name="description" content="A clone of save to bookmarks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`${styles.floatingHeader} ${
          floatingHeader ? `${styles.showHeader}` : `${styles.hideHeader}`
        }`}
      >
        <div className={styles.customize}>
          <div className={styles.bookmark}>
            <img
              className={styles.logo}
              src="/savetobookmarks.png"
              alt="save to bookmarks logo"
            />
            {Bookmarks.length} bookmark(s)
          </div>
          <div className={styles.btnFilter}>
            <Button
              icon={<MdOutlineRefresh className={styles.icon} />}
              title={'Refresh'}
              onClick={() => reloadPage()}
            />
            <Button
              title={`${tag ? 'All Bookmarks' : 'Show Tags'}`}
              onClick={() => handleTag()}
            />
            <Button
              icon={<BsPerson className={styles.icon} />}
              title={'Authors'}
            />
            <div className={styles.btnLayout}>
              <Button
                width={42}
                icon={<FiList className={styles.icon} />}
                selected={layoutType === FeedLayout.List}
                onClick={() => {
                  handleFeedLayout(FeedLayout.List);
                }}
              />
              <Button
                width={42}
                icon={<FiGrid className={styles.icon} />}
                selected={layoutType === FeedLayout.Grid}
                onClick={() => handleFeedLayout(FeedLayout.Grid)}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.tagRow} ${tag ? '' : `${styles.collapsed}`}`}>
          <div className={styles.tags}>
            <div className={styles.tag}>Add a tag</div>
          </div>
        </div>
      </div>

      <Navbar active={true} />
      <header className={styles.header}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>Dashboard</h2>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.customize}>
            <div className={styles.bookmark}>
              {Bookmarks.length} bookmark(s)
            </div>
            <div className={styles.btnFilter}>
              <Button
                icon={<MdOutlineRefresh className={styles.icon} />}
                title={'Refresh'}
                onClick={() => reloadPage()}
              />
              <Button
                title={`${tag ? 'All Bookmarks' : 'Show Tags'}`}
                onClick={() => handleTag()}
              />
              <Button
                icon={<BsPerson className={styles.icon} />}
                title={'Authors'}
              />
            </div>
          </div>

          <div
            className={`${styles.tagRow} ${tag ? '' : `${styles.collapsed}`}`}
          >
            <div className={styles.tags}>
              <div className={styles.tag}>Add a tag</div>
            </div>
          </div>

          <div className={styles.btnLayout}>
            <Button
              width={42}
              icon={<FiList className={styles.icon} />}
              selected={layoutType === FeedLayout.List}
              onClick={() => {
                handleFeedLayout(FeedLayout.List);
              }}
            />
            <Button
              width={42}
              icon={<FiGrid className={styles.icon} />}
              selected={layoutType === FeedLayout.Grid}
              onClick={() => handleFeedLayout(FeedLayout.Grid)}
            />
          </div>
          <div
            className={`${styles.feed} ${
              layoutType === FeedLayout.Grid
                ? `${styles.layoutGrid}`
                : `${styles.layoutList}`
            }`}
          >
            {Bookmarks.map((bookmark) => {
              return (
                <Card
                  key={bookmark.id}
                  className={`${
                    layoutType === FeedLayout.Grid
                      ? `${styles.cardGrid}`
                      : `${styles.cardList}`
                  }`}
                >
                  {bookmark.title}
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
