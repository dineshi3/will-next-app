import { useState } from "react";

import TabTitle from "./TabTile";
import TileContent from "./TileContent";

import content from "./librafeatures.json";

import styles from './styles.module.scss';

const AvailableModules = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tabContainer}>
        <div className={styles.tileContainer}>
          {content.data.map((item, index) => {
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
        {content.data.map((item, index) => selected === index && <TileContent item={item} key={item.title} />)}
      </div>
    </div>
  );
};

export default AvailableModules;
