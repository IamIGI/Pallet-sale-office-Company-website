import classes from './MainHeadSection.module.scss';
import MainPageNavigation from '../MainPageNavigation/MainPageNavigation';
import MainTitle from '../MainTitle/MainTitle';

interface MainPageNavigationProps {
  scrollToSection: (section: string) => void;
}

export default function MainHeadSection({
  scrollToSection,
}: MainPageNavigationProps) {
  return (
    <div className={classes.wrapper}>
      <MainTitle />
      <MainPageNavigation scrollToSection={scrollToSection} />
    </div>
  );
}
