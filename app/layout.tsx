import Providers from '@/components/providers';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Trinovate Global',
    template: '%s | Trinovate Global',
  },
  description:
    'Delivering innovative software services and reliable maintenance solutions for businesses.\n',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          'scroll-smooth antialiased',
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
