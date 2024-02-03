'use client';

import BackButton from '../BackButton/BackButton';
import classes from './HeaderDegaultPage.module.scss';

export default function HeaderDefaultPage() {
  return (
    <div className={classes.wrapper}>
      <BackButton />
      <h1>PaletyEuro s.c</h1>
    </div>
  );
}
