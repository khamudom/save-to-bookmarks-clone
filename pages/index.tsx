import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MdOutlineRefresh } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FiGrid, FiList } from 'react-icons/fi';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export default function Home() {
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
            <Button width={42} icon={<FiList className={styles.icon} />} />
            <Button
              width={42}
              icon={<FiGrid className={styles.icon} />}
              active={true}
            />
          </div>

          <div className={styles.feedList}>
            <Card />
          </div>
          <div className={styles.feedGrid}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}
