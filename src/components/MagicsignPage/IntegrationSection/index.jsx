import Button from '../modules/Button';
import Label from '../modules/Label';

import styles from './styles.module.scss';

const IntegrationSection = (props) => {
  const {
    content: { integration },
  } = props;

  const { sandbox, learnMore } = integration.buttons;
  return (
    <div className={styles.section}>
        <div className={styles.container}>
        <div className={styles.flexContainer}>
            <div className={styles.left}>
            <Label text={integration.label} />
            <h3>{integration.title}</h3>
            <p>{integration.description}</p>
            <div className={styles.buttons}>
                <Button text={sandbox.text} />
                <Button text={learnMore.text} type="outline" />
            </div>
            </div>
            <div className={styles.right}>
            <img {...integration.image} />
            </div>
        </div>
        <ul className={styles.features}>
            {integration.features.map((feature) => (
            <li key={feature.text}>{feature.text}</li>
            ))}
        </ul>
        </div>
    </div>
  );
};

export default IntegrationSection;