import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './AboutUsSection.module.scss';

export default function AboutUsSection() {
  return (
    <div className={classes.wrapper}>
      <SectionBackground>
        <svg
          width="1724"
          height="544"
          viewBox="0 0 1724 544"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1724V544L439.525 386.278L0 0Z" fill="#F8F3ED" />
        </svg>
      </SectionBackground>

      <h1>AboutUs</h1>
    </div>
  );
}
