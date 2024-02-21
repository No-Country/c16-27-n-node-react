// RootLayout.js
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
      <body className={`${inter.className} flex flex-col mx-auto min-h-screen max-w-[1400px] bg-gradient-to-t from-zinc-100 to-slate-50`}>
        <NabBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
