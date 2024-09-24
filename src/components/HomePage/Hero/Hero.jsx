import Section from '../../../shared/Section/Section';
import css from './Hero.module.css';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <Section className={css.hero}>
      <div className={css.textbox}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.subtitle}>
          You can find everything you want in our catalog
        </h2>
        <div className={css.button}>
          <NavLink to="/catalog">View Now</NavLink>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
