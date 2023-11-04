import './global.css';

export const metadata = {
  title: 'bossthanawat | Home',
  description: 'helloworld',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-slate-900 bg-[#fef7fa]">{children}</body>
    </html>
  );
}
