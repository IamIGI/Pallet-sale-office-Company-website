'use client';

import Button from '../Button/Button';
import classes from './HeaderDegaultPage.module.scss';
import BackIcon from '@/assets/icons/BackIcon.svg';

export default function HeaderDefaultPage() {
  return (
    <div className={classes.wrapper}>
      <Button icon={BackIcon} href={'/'} />
      <h1>PaletyEuro s.c</h1>
    </div>
  );
}
