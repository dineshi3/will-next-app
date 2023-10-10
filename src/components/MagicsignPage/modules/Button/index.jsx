import styles from './styles.module.scss';

const types = {
  outline: styles.btnOutline,
};

const Button = ({ text, type }) => {
  return <button className={`${styles.btn} ${styles.btnPrimary} ${type ? types[type] : null}`}>{text}</button>;
};

export default Button;
