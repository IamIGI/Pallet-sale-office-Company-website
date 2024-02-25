'use client';

import classes from './Button.module.scss';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

interface Button {
  icon?: any;
  text?: string;
  href: string;
  handleClick?: () => void;
}

export default function Button({ icon, text, href, handleClick }: Button) {
  const router = useRouter();

  function onClick() {
    if (handleClick) {
      handleClick();
    } else {
      router.push(href);
    }
  }
  return (
    <button className={classes.buttonWrapper} onClick={onClick}>
      {text}
      <div className={classes.iconWrapper}>
        <Image src={icon} alt={text || 'grafika'} fill />
      </div>
    </button>
  );
}
