import { SectionModel } from '@/models/sectionModel';
import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './AboutUsSection.module.scss';
import calendar from '@/assets/icons/Callendar.svg';
import gears from '@/assets/icons/Gears.svg';
import truck from '@/assets/icons/Truck.svg';
import certificate from '@/assets/icons/Certificats.svg';
import Tile from '../Tile/tile';

interface AboutUsSectionProps {
  data: SectionModel;
}

export default function AboutUsSection({ data }: AboutUsSectionProps) {
  const icons = [calendar, gears, truck, certificate];

  return (
    <div className={classes.wrapper} id="aboutSection">
      <SectionBackground>
        <svg
          width="1724"
          height="544"
          viewBox="0 0 1724 544"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1724V544L439.525 386.278L0 0Z" fill="currentColor" />
        </svg>
      </SectionBackground>

      <div className="sectionWrapper">
        <div className={classes.titleWrapper}>
          <h1>{data.title}</h1>
          <div className={classes.line} />
        </div>
        <div className={classes.innerWrapper}>
          <article className={classes.article}>
            <h2>{data.excerpt}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
          </article>
          <div className={classes.tileWrapper}>
            {data.tilesText.map((text, index) => (
              <Tile key={index} icons={icons} index={index} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
