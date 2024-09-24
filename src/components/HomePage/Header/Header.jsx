import Section from '../../../shared/Section/Section';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  return (
    <Section className={css.nav}>
      <Logo />
      <Navigation />
    </Section>
  );
};

export default Header;
