import HeaderDefaultPage from '@/components/HeaderDefaultPage/HeaderDefaultPage';
import classes from './layout.module.scss';
import DefaultPageBackground from '@/components/DefaultPageBackground/DefaultPageBackground';

export default function DefaultPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultPageBackground>
      <HeaderDefaultPage />
      <div className={classes.wrapper}>{children}</div>
    </DefaultPageBackground>
  );
}
