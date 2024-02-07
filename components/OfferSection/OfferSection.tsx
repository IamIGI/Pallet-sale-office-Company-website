import { SectionModel } from '@/models/sectionModel';
import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './OfferSection.module.scss';
import positiveDeal from '@/assets/icons/PositiveDeal.svg';
import euroPallet from '@/assets/icons/EuroPallet.png';
import cornerMeasurement from '@/assets/icons/CornerMeasurement.svg';
import Tile from '../Tile/tile';

export default function OfferSection({ data }: { data: SectionModel }) {
  const icons = [positiveDeal, euroPallet, cornerMeasurement];

  console.log();
  return (
    <div className={classes.wrapper}>
      <SectionBackground topPosition={-80}>
        <svg
          width="1726"
          height="698"
          viewBox="0 0 1726 698"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-2 0L1726 177.5V577L-2 698V0Z" fill="currentColor" />
        </svg>
      </SectionBackground>

      <div className="sectionWrapper">
        <div className={classes.contentWrapper}>
          <div className={classes.leftSection}>
            <div className={classes.line} />
            <div className={classes.titleWrapperBigScreen}>
              {data.tilesText.map((text, index) => (
                <Tile key={index} icons={icons} index={index} text={text} />
              ))}
            </div>

            <div className={classes.titleWrapperMidScreen}>
              <div className={classes.midTilesWrapper}>
                {data.tilesText.slice(0, 2).map((text, index) => (
                  <Tile key={index} icons={icons} index={index} text={text} />
                ))}
              </div>
              <div className={classes.midTilesWrapper}>
                <Tile icons={[icons[2]]} index={0} text={data.tilesText[2]} />
              </div>
            </div>
          </div>

          <div className={classes.rightSection}>
            <h1>{data.title}</h1>
            <h2>{data.excerpt}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
        </div>
      </div>
    </div>
  );
}
