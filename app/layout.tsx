import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PaletyEuro - Firma',
  description:
    'Firma zajmująca się dystrybucją palet euro na rynku małopolskim',
  authors: [{ name: 'Igor Kłusek' }],
  publisher: 'Igor Kłusek',
  keywords: [
    'Palety',
    'Dystrybucja',
    'sprzedaż',
    'pallets',
    'sale',
    'distribution',
    'EuroPalety',
    'EuroPallets',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
