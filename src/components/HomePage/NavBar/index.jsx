import styles from './styles.module.scss';

const NavBar = (props) => {
  const { content, onClick } = props;
  return (
    <nav className={`container ${styles.container}`}>
      <img {...content.icon} />
      <button className={`btn ${styles.btnPrimary}`} onClick={onClick}>
        Get a Demo
      </button>
    </nav>
  );
};

export default NavBar;
