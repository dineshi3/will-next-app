import styles from './styles.module.scss';

const ExtractFields = (props) => {
    const { data: { extract } } = props;
    return ( <div className={styles.container}>
        <h3 className={styles.title}>{extract.title}</h3>
        <p>{extract.description}</p>
        <img {...extract.img} />
      </div>);
}
 
export default ExtractFields;