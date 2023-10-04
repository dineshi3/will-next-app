
import styles from './styles.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <img src='https://vakilsearch.com/products/libra/libra-logo.svg' alt='libra' />
      <button className={styles.btnPrimary}>Get a Demo</button>
    </nav>
  );
};

export default NavBar;
