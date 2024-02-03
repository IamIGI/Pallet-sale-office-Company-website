import classes from './MainHeadSection.module.scss';
import MainPageNavigation from '../MainPageNavigation/MainPageNavigation';
import MainTitle from '../MainTitle/MainTitle';

export default function MainHeadSection() {
  return (
    <div className={classes.wrapper}>
      <MainTitle />
      <MainPageNavigation />
    </div>
  );
}
