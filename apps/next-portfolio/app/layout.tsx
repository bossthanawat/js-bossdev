import { cn } from '@js-bossdev/components';
import './global.css';
import { Inter as FontSans } from 'next/font/google';
// import Client from './client';
// import Client from './about/client';

export const metadata = {
  title: 'bossthanawat | Home',
  description: 'helloworld',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased text-slate-900',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
