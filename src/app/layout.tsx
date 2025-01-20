import type { Metadata } from 'next';
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
              Rick&apos;s and Morty&apos;s character finder
            </h1>
            <div className='headerLogo'>
              <Link href='/' aria-label='Go to home page'></Link>
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
