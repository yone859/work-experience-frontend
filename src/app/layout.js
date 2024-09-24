"use client";

import Link from 'next/link';
import './globals.css';
import { Inconsolata } from 'next/font/google';
import {RecoilRoot} from 'recoil';



const fnt = Inconsolata({ subsets: ['latin'] })

export default  function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={fnt.className}>
      <RecoilRoot>
        {children}
      </RecoilRoot>
      </body>
    </html>
  );
}