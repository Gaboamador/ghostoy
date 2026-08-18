import { GiSamuraiHelmet } from 'react-icons/gi';
import {
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineCollection,
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

import styles from './Layout.module.scss';

const links = [
  ['/builds', 'Builds', GiSamuraiHelmet],
  ['/collection', 'Colección', HiOutlineCollection],
  ['/missing', 'Faltantes', HiOutlineClipboardList],
  ['/settings', 'Datos', HiOutlineCog],
];

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.mark}>語</span>
        <div>
          <strong>Ghost of Yotei</strong>
          <small>Build companion</small>
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
