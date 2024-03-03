import { ContactUsSectionModel } from '@/models/sectionModel';
import SectionBackground from '../SVGBackground/SVGBackground';
import classes from './ContactUsSection.module.scss';
import Button from '../Button/Button';
import sendMessage from '@/assets/icons/SendMessage.svg';
import LocationDescr from '../locationDescr/locationDescr';

import GoogleMapComponent from '../Map/GoogleMapComponent';

export default function ContactUsSection({
  data,
}: {
  data: ContactUsSectionModel;
}) {
  return (
    <div className={classes.wrapper} id="contactSection">
      <SectionBackground>
        <svg
          width="100%"
          height="399"
          viewBox="0 0 1718 459"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M284.97 212.682L1717.37 0V599H0L284.97 212.682Z"
            fill="currentColor"
          />
        </svg>
        {/* <svg
          width="925"
          height="1085"
          viewBox="0 0 925 1085"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M153.489 385.242L925 0V1085H0L153.489 385.242Z"
            fill="#F8F3ED"
          />
        </svg> */}
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
                <div key={location.lat} className={classes.locationItemWrapper}>
                  <LocationDescr text={location.name} />
                </div>
              ))}
            </div>
            <div className={classes.mapWrapper}>
              <GoogleMapComponent locations={data.mapLocations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
