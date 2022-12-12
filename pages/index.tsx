import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineRefresh } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { SlGrid, SlList } from 'react-icons/sl';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clone - Save To Bookmarks</title>
        <meta name="description" content="A clone of save to bookmarks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.navContainer}>
            <nav className={styles.nav}>
              <div className={styles.navLeft}>
                <img
                  className={styles.logo}
                  src="/savetobookmarks.png"
                  alt="save to bookmarks logo"
                />
                <div className={styles.link}>
                  <a href="#">Dashboard</a>
                  <a href="#">Import</a>
                </div>
              </div>
              <div className={styles.navRight}>
                kam
                <FiChevronDown />
              </div>
            </nav>
            <div>Dashboard</div>
          </div>
        </header>
        <section className={styles.customize}>
          <div className={styles.bookmark}>10 bookmark(s)</div>
          <div className={styles.btnContainer}>
            <div className={styles.btnFilter}>
              <button>
                <MdOutlineRefresh /> refresh
              </button>
              <button>Show Tags</button>
              <button>
                <BsPerson /> Author
              </button>
            </div>
            <div className={styles.btnLayout}>
              <button>
                <SlList />
              </button>
              <button>
                <SlGrid />
              </button>
            </div>
          </div>
        </section>
        <section className={styles.feed}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </section>
      </main>
    </div>
  );
}
