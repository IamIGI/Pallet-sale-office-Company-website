import { ReactNode } from 'react';
import classes from './SVGBackground.module.scss';

export default function SVGBackground({
  children,
  topPosition = 0,
}: {
  children: ReactNode;
  topPosition?: number;
}) {
  return (
    <div className={classes['background']} style={{ top: `${topPosition}px` }}>
      {children}
    </div>
  );
}
