import Image from 'next/image';
import classes from './locationDescr.module.scss';
import mapMark from '@/assets/icons/MapMark.svg';

interface LocationDescrInterface {
  text: string;
}

export default function LocationDescr({ text }: LocationDescrInterface) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.iconWrapper}>
        <Image src={mapMark} alt={text} fill />
      </div>
      <h3 dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
