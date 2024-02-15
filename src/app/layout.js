import { Inter } from 'next/font/google';
import './globals.css';
import NabBar from './components/NabBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Meetup App',
  description: 'Meetup Web App, aplicación para crear y unirse a eventos de tu interés.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={inter.className}>
          <NabBar />
          <main>{children}</main>
          {/* <Footer /> */}
        </body>
    </html>
  );
}
