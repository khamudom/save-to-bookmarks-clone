import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Import() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clone - Save To Bookmarks</title>
        <meta name="description" content="A clone of save to bookmarks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>Import Bookmarks</h2>
        </div>
      </header>
      <main className={styles.main}></main>
    </div>
  );
}
