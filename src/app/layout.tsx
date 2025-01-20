import type { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';
import Link from 'next/link';

import SearchBar from './components/SearchBar';

export const metadata: Metadata = {
  title: 'Portal Gun - Rootstrap',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main>
          <header>
            <h1 className='visually-hidden'>
              Rick's and Morty's character finder
            </h1>
            <div className='headerLogo'>
              <Link href='/'></Link>
            </div>
          </header>

          <section>
            <SearchBar />
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}
