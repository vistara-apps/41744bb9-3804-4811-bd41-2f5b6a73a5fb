import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'LocalVibe - Discover Authentic Local Experiences',
  description: 'Discover and book authentic local experiences, powered by community.',
  openGraph: {
    title: 'LocalVibe',
    description: 'Discover and book authentic local experiences, powered by community.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
