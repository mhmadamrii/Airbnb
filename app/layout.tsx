import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
const inter = Nunito({ subsets: ['latin'] });
import QueryProvider from '@/components/QueryProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-20 pt-28">
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}