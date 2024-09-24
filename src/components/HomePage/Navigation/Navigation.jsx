import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const linkIsActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={linkIsActive}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={linkIsActive}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
