import Image from 'next/image';

import styles from './styles.module.scss';

const TabTitle = ({ item, selected, setSelected, index }) => {
  return (
    <>
      <div
        onClick={() => setSelected(index)}
        className={`${styles.tileContainer} ${index === selected ? styles.selected : styles.notSelected}`}
      >
        <Image
          src={`${process.env.VAKILSEARCH_LIBRA_URL}/${item.selectedImg}`}
          width={20}
          height={20}
          alt=''
          style={{ display: index === selected ? 'block': 'none' }}
        />
        <Image
          src={`${process.env.VAKILSEARCH_LIBRA_URL}/${item.logo}`}
          width={20}
          height={20}
          alt=''
          style={{ display: index === selected ? 'none': 'block' }}
        />
        <p className='md:text-[18px]'>{item.tabTitle}</p>
      </div>
    </>
  );
};

export default TabTitle;
