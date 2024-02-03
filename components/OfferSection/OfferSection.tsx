import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './OfferSection.module.scss';

export default function OfferSection() {
  return (
    <div className={classes.wrapper}>
      <SectionBackground>
        <svg
          width="1726"
          height="698"
          viewBox="0 0 1726 698"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-2 0L1726 177.5V577L-2 698V0Z" fill="#F1E7DA" />
        </svg>
      </SectionBackground>

      <h1>Offer</h1>
    </div>
  );
}
