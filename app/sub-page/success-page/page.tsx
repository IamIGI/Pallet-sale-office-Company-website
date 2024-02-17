import Image from 'next/image';
import classes from './page.module.scss';
import fastEnvelope from '@/assets/icons/FastEnvelope.svg';
import successData from '@/assets/data/successPage.json';

export default function SuccessPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.iconWrapper}>
        <Image src={fastEnvelope} alt="Koperta" fill />
      </div>
      <div className={classes.description}>
        <h1>{successData.title}</h1>

        <p dangerouslySetInnerHTML={{ __html: successData.description }} />
      </div>
    </div>
  );
}
