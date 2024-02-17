import { Inter } from 'next/font/google';
import './globals.css';
import NabBar from './components/NabBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Meetup App',
  description: 'Meetup Web App, aplicación para crear y unirse a eventos de tu interés.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} mx-auto flex min-h-screen max-w-[1200px] flex-col gap-9 px-2 py-4`}
      >
        <NabBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
