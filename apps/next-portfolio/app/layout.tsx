import { cn } from '@js-bossdev/components';
import './global.css';
import { Inter as FontSans } from 'next/font/google';
import { LayoutNavbar } from './components/layout';
import { ReactQueryClientProvider } from './components/ReactQueryClientProvider';
// import Client from './client';
// import Client from './about/client';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
import { Toaster } from 'sonner';
import UnderConstruction from './components/UnderConstruction';

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
    <ReactQueryClientProvider>
      <html lang="en">
        <body
          className={cn(
            'bg-background font-sans antialiased text-slate-900',
            fontSans.variable
          )}
        >
          <UnderConstruction />
          <LayoutNavbar />
          {/* <div
          style={{
            background:
              'radial-gradient(circle at top center,rgba(211, 224, 255, 0.5) 0,transparent 50%,transparent 100%)',
          }}
          className="absolute inset-0 -z-50 max-h-screen"
        /> */}

          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
