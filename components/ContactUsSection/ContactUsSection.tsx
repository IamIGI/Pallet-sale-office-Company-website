import { ContactUsSectionModel } from '@/models/sectionModel';
import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './ContactUsSection.module.scss';
import Button from '../Button/Button';
import sendMessage from '@/assets/icons/SendMessage.svg';
import LocationDescr from '../locationDescr/locationDescr';

export default function ContactUsSection({
  data,
}: {
  data: ContactUsSectionModel;
}) {
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

      <div className="sectionWrapper">
        <div className={classes.titleWrapper}>
          <h1>{data.title}</h1>
          <div className={classes.line} />
        </div>
        <div className={classes.innerWrapper}>
          <div className={classes.leftWrapper}>
            {data.contact.map((contact) => (
              <div key={contact.type} className={classes.sectionWrapper}>
                <h2>{contact.name}:</h2>
                <ul>
                  {contact.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            ))}
            <Button
              icon={sendMessage}
              text="Skontaktuj się"
              href={'/sub-page/contact'}
            />
          </div>
          <div className={classes.rightWrapper}>
            <div className={classes.locationWrapper}>
              {data.mapLocations.map((location) => (
                <div key={location} className={classes.locationItemWrapper}>
                  <LocationDescr text={location} />
                </div>
              ))}
            </div>
            <div className={classes.mapWrapper}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
