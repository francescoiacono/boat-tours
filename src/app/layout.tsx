import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boat Tours - Ischia',
  description: 'Boat Tours - Ischia - Italy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
