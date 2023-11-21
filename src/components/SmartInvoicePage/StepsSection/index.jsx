import styles from './styles.module.scss';

const StepsSection = (props) => {
    console.log(props);

    const {
    content: { steps },
  } = props;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3>{steps.title}</h3>
        <div className={styles.steps}>
          {steps.steps.map((step, index) => (
            <div className={styles.step} key={step}>
              <h5>{step.title}</h5> <p>{step.description}</p>{' '}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
