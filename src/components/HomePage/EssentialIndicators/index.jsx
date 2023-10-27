import styles from './styles.module.scss';

const indicators = [
  {
    label: 'Law firm choose us',
    count: '62K',
  },
  {
    label: 'Cases tracked every days',
    count: '100M',
  },
  {
    label: 'Judgments for legal research',
    count: '5M',
  },
  {
    label: 'Courts covered',
    count: '10K',
  },
];

const EssentialIndicators = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Essential Indicators</p>
      <div className={styles.items}>
        {indicators.map((indicator, index) => (
          <>
            <div id='62' className={styles.card}>
              <div className={styles.labelContainer}>
                <span className={styles.count}>{indicator.count}</span>
                <span className={styles.plus}>+</span>
              </div>
              <div className={styles.label}>{indicator.label}</div>
            </div>
            {index != indicators.length - 1 && <div className={styles.border}></div>}
          </>
        ))}
      </div>
    </div>
  );
};

export default EssentialIndicators;
