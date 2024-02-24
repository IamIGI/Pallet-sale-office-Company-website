'use client';

import Link from 'next/link';
import classes from './MainPageNavigation.module.scss';
import Warehouse from '@/assets/icons/WarehouseSupply.svg';
import Pallets from '@/assets/icons/Pallets.svg';
import FastEnvelope from '@/assets/icons/FastEnvelope.svg';
import Image from 'next/image';

interface MainPageNavigationProps {
  scrollToSection: (section: string) => void;
}

export default function MainPageNavigation({
  scrollToSection,
}: MainPageNavigationProps) {
  const menu = [
    {
      href: null,
      onClick: () => scrollToSection('aboutSection'),
      text: 'O nas',
      icon: Warehouse,
    },
    {
      // href: '/sub-page/offer',
      href: null,
      onClick: () => scrollToSection('offerSection'),
      text: 'Oferta',
      icon: Pallets,
    },
    {
      // href: '/sub-page/contact',
      href: null,
      onClick: () => scrollToSection('contactSection'),
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
              {item.href !== null ? (
                <Link className={classes.link} href={item.href}>
                  <div className={classes.iconWrapper}>
                    <Image src={item.icon} alt={item.text} fill />
                  </div>
                  {item.text}
                </Link>
              ) : (
                <div
                  className={classes.link}
                  onClick={item.onClick}
                  role="button"
                  tabIndex={0}
                >
                  <div className={classes.iconWrapper}>
                    <Image src={item.icon} alt={item.text} fill />
                  </div>
                  {item.text}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
