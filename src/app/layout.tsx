import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import SearchBar from "./components/SearchBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portal Gun - Rootstrap",
  description: "How about second chances? Because the first try is never great... just like your ex!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <header>
            <div className="headerLogo">
              <Link href="/">
                <Image src="/rick_and_morty_logo.svg" alt="Rick and Morty" fill />
              </Link>
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
