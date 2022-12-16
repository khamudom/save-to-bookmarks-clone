import React from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { FiChevronDown } from 'react-icons/fi';
import styles from '../styles/Navbar.module.css';

export interface NavigationLinkProps {
  href: string;
  text: string;
  router: NextRouter;
}

function NavigationLink({ href, text, router }: NavigationLinkProps) {
  const isActive = router.asPath === (href === '/dashboard' ? '/' : href);
  return (
    <Link
      href={href === '/dashboard' ? '/' : href}
      passHref
      className={`${styles.link} ${isActive && `${styles.active}`}`}
    >
      {text}
    </Link>
  );
}

const navigationRoutes = ['dashboard', 'import'];

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navLink}>
          <div className={styles.navLeft}>
            <img
              className={styles.logo}
              src="/savetobookmarks.png"
              alt="save to bookmarks logo"
            />
            <div className={styles.links}>
              {navigationRoutes.map((singleRoute) => {
                return (
                  <NavigationLink
                    key={singleRoute}
                    href={`/${singleRoute}`}
                    text={singleRoute}
                    router={router}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.navRight}>
            <button className={styles.menu}>
              kam
              <FiChevronDown className={styles.menuIcon} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
