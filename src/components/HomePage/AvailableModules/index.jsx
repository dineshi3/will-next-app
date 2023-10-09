import { useState } from "react";

import TabTitle from "./TabTile";
import TileContent from "./TileContent";

import styles from './styles.module.scss';

const AvailableModules = (props) => {
  const { content } = props;
  const { modules } = content;

  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tabContainer}>
        <div className={styles.tileContainer}>
          {modules.features.map((item, index) => {
            return (
              <TabTitle
                key={index}
                item={item}
                selected={selected}
                setSelected={setSelected}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bodyContainer}>
        {modules.features.map((item, index) => selected === index && <TileContent item={item} key={item.title} />)}
      </div>
    </div>
  );
};

export default AvailableModules;
