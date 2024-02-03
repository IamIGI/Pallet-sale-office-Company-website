'use client';

import classes from './BackButton.module.scss';
import { useRouter } from 'next/navigation';
import BackIcon from '@/assets/icons/BackIcon.svg';
import Image from 'next/image';

export default function BackButton() {
  const router = useRouter();
  return (
    <button className={classes.buttonWrapper} onClick={() => router.push('/')}>
      <Image src={BackIcon} alt="goBack" width={50} height={50} />
    </button>
  );
}
