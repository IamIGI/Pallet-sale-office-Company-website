'use client';

import classes from './Button.module.scss';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

interface Button {
  icon?: any;
  text?: string;
  href: string;
}

export default function Button({ icon, text, href }: Button) {
  const router = useRouter();
  return (
    <button className={classes.buttonWrapper} onClick={() => router.push(href)}>
      {text}
      <div className={classes.iconWrapper}>
        <Image src={icon} alt={text || 'grafika'} fill />
      </div>
    </button>
  );
}
