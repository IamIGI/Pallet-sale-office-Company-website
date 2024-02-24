import OfferList from '@/components/OfferList/OfferList';
import classes from './page.module.scss';
import data from '@/assets/data/offerPage.json';
import Button from '@/components/Button/Button';
import sendIcon from '@/assets/icons/SendMessage.svg';
import infoIcon from '@/assets/icons/infoIcon.svg';
import Image from 'next/image';

export default function OfferPage() {
  return (
    <div className={classes.wrapper}>
      <section className={classes.upperWrapper}>
        <h1>{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </section>
      <section className={classes.mainWrapper}>
        <div className={classes.subTitleWrapper}>
          <h2>{data.subtitle_1}</h2> <div className={classes.line} />
        </div>
        <section className={classes.mainContent}>
          <div className={classes.leftWrapper}>
            <OfferList data={data.offer} />
          </div>
          <div className={classes.rightWrapper}>
            <div className={classes.hintWrapper}>
              <p>
                <Image src={infoIcon} alt="info" width="19" height="19" />
                {data.hint}
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className={classes.bottomWrapper}>
        <div className={classes.bottomSection}>
          <div className={classes.leftSection}>
            <p
              className={classes.subTitleDesc}
              dangerouslySetInnerHTML={{ __html: data.subtitle_1_desc }}
            />
          </div>
          <div className={classes.rightSection}>
            <div className={classes.hintWrapper}>
              <p>
                <Image src={infoIcon} alt="info" width="19" height="19" />
                {data.hint}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.buttonWrapper}>
          <p>{data.subtitle_2} </p>
          <Button
            text={data.button_text}
            href="/sub-page/contact"
            icon={sendIcon}
          ></Button>
        </div>
      </section>
    </div>
  );
}
