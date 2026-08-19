import { GiSamuraiHelmet } from 'react-icons/gi';
import {
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineCollection,
  HiOutlineMap,
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

import styles from './Layout.module.scss';

const links = [
  ['/builds', 'Builds', GiSamuraiHelmet],
  ['/collection', 'Colección', HiOutlineCollection],
  ['/explore', 'Explorar', HiOutlineMap],
  ['/missing', 'Faltantes', HiOutlineClipboardList],
  ['/settings', 'Datos', HiOutlineCog],
];

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.mark}
          src="/favicon.svg"
          alt=""
          aria-hidden="true"
        />
        <div>
          <strong>Ghost of Yotei</strong>
          <small>Companion App</small>
        </div>
      </header>

      <main>{children}</main>

      <nav className={styles.nav}>
        {links.map(([to, label, Icon]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            <Icon />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
