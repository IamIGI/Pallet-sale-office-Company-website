import SVGBackground from '@/components/SVGBackground/SVGBackground';
import classes from './DefaultPageBackground.module.scss';
import { ReactNode } from 'react';

export default function DefaultPageBackground({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={classes.wrapper}>
      <SVGBackground>
        <svg
          width="1820"
          height="812"
          viewBox="0 0 1820 812"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1820V812L656.5 597.5L0 0Z" fill="#F1E7DA" />
        </svg>
      </SVGBackground>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
