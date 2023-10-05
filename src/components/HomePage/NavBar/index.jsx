import styles from './styles.module.scss';

const NavBar = (props) => {
  const { onClick } = props;
  return (
    <nav className={`container ${styles.container}`}>
      <img src='https://vakilsearch.com/products/libra/libra-logo.svg' alt='libra' />
      <button className={`btn ${styles.btnPrimary}`} onClick={onClick}>
        Get a Demo
      </button>
    </nav>
  );
};

export default NavBar;
