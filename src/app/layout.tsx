import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const helveticaMono = localFont({
  src: './fonts/HelveticaMono.woff2',
  variable: '--font-helvetica-mono',
  weight: '100 900',
});

const helveticaDisplay = localFont({
  src: './fonts/HelveticaNowDisplay-Black.woff2',
  variable: '--font-helvetica-display',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'The Blimp (Replicate)',
  description: 'The Blimp but replicated',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaDisplay.variable} ${helveticaMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
