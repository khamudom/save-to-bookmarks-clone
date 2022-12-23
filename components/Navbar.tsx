import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { FiChevronDown } from 'react-icons/fi';
import styles from '../styles/Navbar.module.css';
import { Flyout } from './Flyout';

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
  const [open, setOpen] = useState(false);
  const router = useRouter();

  let flyoutRef: any = useRef();

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!flyoutRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

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
                    text={
                      singleRoute.charAt(0).toUpperCase() + singleRoute.slice(1)
                    }
                    router={router}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.navRight} ref={flyoutRef}>
            <button className={styles.menu} onClick={() => setOpen(!open)}>
              kam
              <FiChevronDown className={styles.menuIcon} />
            </button>
            <Flyout
              className={`${styles.flyout} ${
                open ? `${styles.active}` : `${styles.inactive}`
              }`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
