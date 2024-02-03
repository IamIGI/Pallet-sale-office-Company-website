import Image from 'next/image';
import classes from './MainTitle.module.scss';
import MainPageBackground from '@/assets/images/MainPageBackground.png';

export default function MainTitle() {
  return (
    <div className={classes.wrapper}>
      <Image src={MainPageBackground} alt="Palety na betonowym place" fill />
      <div className={classes.titleBackground}>
        <h1>
          <span>P.P.H.U. PaletyEuro s.c. </span> <br />
          PALETY SKUP - SPRZEDAŻ - PRODUKCJA
        </h1>
      </div>
    </div>
  );
}
