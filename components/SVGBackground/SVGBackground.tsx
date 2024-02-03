import { ReactNode } from 'react';
import classes from './SVGBackground.module.scss';

export default function SVGBackground({ children }: { children: ReactNode }) {
  return <div className={classes['background']}>{children}</div>;
}
