import Link from 'next/link';
import classes from './MainPageNavigation.module.scss';
import Warehouse from '@/assets/icons/WarehouseSupply.svg';
import Pallets from '@/assets/icons/Pallets.svg';
import FastEnvelope from '@/assets/icons/FastEnvelope.svg';
import Image from 'next/image';

export default function MainPageNavigation() {
  const menu = [
    {
      href: '/sub-page/about',
      text: 'O nas',
      icon: Warehouse,
    },
    {
      href: '/sub-page//offer',
      text: 'Oferta',
      icon: Pallets,
    },
    {
      href: '/sub-page//contact',
      text: 'Kontakt',
      icon: FastEnvelope,
    },
  ];

  return (
    <>
      <nav className={classes.nav}>
        <ul>
          {menu.map((item, index) => (
            <li key={index} className={classes[`menuBgColor_${index + 1}`]}>
              <Link className={classes.link} href={item.href}>
                <div className={classes.iconWrapper}>
                  <Image src={item.icon} alt={item.text} fill />
                </div>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
