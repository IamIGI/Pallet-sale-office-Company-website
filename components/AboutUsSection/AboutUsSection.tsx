import { SectionModel } from '@/models/sectionModel';
import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './AboutUsSection.module.scss';
import calendar from '@/assets/icons/Callendar.svg';
import gears from '@/assets/icons/Gears.svg';
import truck from '@/assets/icons/Truck.svg';
import certificate from '@/assets/icons/Certificats.svg';
import Image from 'next/image';

export default function AboutUsSection({ data }: { data: SectionModel }) {
  const icons = [calendar, gears, truck, certificate];

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
          <path d="M0 0H1724V544L439.525 386.278L0 0Z" fill="currentColor" />
        </svg>
      </SectionBackground>
      <div className={classes.contentWrapper}>
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
              <div className={classes.tile} key={index}>
                <div className={classes.tileBackground}>
                  <div className={classes.iconWrapper}>
                    <Image src={icons[index]} alt={text} fill />
                  </div>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
