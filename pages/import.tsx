import Head from 'next/head';
import { Button } from '../components/Button';
import styles from '../styles/Import.module.css';

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
      <main className={styles.main}>
        <div className={styles.mainContent}>
          In order to import your Bookmarks from Twitter please click the button
          below. The import process usually takes few seconds.
        </div>
        <div className={styles.import}>
          <Button className={styles.importBtn} title={'Import Bookmarks'} />
        </div>
      </main>
    </div>
  );
}
