import DefaultPageBackground from '@/components/DefaultPageBackground/DefaultPageBackground';
import HeaderDefaultPage from '@/components/HeaderDefaultPage/HeaderDefaultPage';
import classes from './notFound.module.scss';
import Image from 'next/image';
import truck from '@/assets/icons/Truck.svg';
import pageData from '@/assets/data/404Page.json';

export default function NotFoundPage() {
  return (
    <div className={classes.mainWrapper}>
      <HeaderDefaultPage />
      <div className={classes.wrapper}>
        <div className={classes.iconWrapper}>
          <Image src={truck} alt="Ciezarowka" fill />
        </div>
        <div className={classes.description}>
          <h1>{pageData.title}</h1>

          <p dangerouslySetInnerHTML={{ __html: pageData.description }} />
        </div>
      </div>
    </div>
  );
}
