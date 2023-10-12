import style from './style.module.scss';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/smart-i/SMARTILOGO.svg"
        width={110}
        height={40}
        alt="smarti"
      />
    </div>
  );
};

export { Logo };
