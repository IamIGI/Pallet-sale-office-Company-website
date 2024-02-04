import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './ContactUsSection.module.scss';

export default function ContactUsSection() {
  return (
    <div className={classes.wrapper}>
      <SectionBackground>
        <svg
          width="1718"
          height="599"
          viewBox="0 0 1718 599"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M284.97 212.682L1717.37 0V599H0L284.97 212.682Z"
            fill="currentColor"
          />
        </svg>
      </SectionBackground>

      <h1>ContactUs</h1>
    </div>
  );
}
