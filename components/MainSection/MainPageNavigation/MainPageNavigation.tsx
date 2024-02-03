import Link from 'next/link';
import classes from './MainPageNavigation.module.scss';
import Warehouse from '@/assets/icons/WarehouseSupply.svg';
import Pallets from '@/assets/icons/Pallets.svg';
import FastEnvelope from '@/assets/icons/FastEnvelope.svg';
import Image from 'next/image';

export default function MainPageNavigation() {
  const menu = [
    { href: '/about', text: 'O nas', icon: Warehouse, color: '#F1E7DA' },
    { href: '/offer', text: 'Oferta', icon: Pallets, color: '#EADBC8' },
    { href: '/contact', text: 'Kontakt', icon: FastEnvelope, color: '#DCC3A3' },
  ];

  return (
    <>
      <nav className={classes.nav}>
        <ul>
          {menu.map((item, index) => (
            <li key={index} style={{ backgroundColor: item.color }}>
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
