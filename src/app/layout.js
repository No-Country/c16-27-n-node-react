// RootLayout.js
import { Inter } from "next/font/google";
import "./globals.css";
import NabBar from "./components/NabBar";
import Footer from "./components/Footer";
import { AuthProviders } from "./providers/AuthProviders";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MeetHub",
  description:
    "MeetHub Web App, aplicación para crear y unirse a eventos de tu interés.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <AuthProviders>
        <body
          className={`${inter.className} font-segoe flex flex-col mx-auto min-h-screen bg-gradient-to-t from-zinc-100 to-slate-50`}
        >
          <NabBar />
          <main className="flex-grow max-width-[1400px]">{children}</main>
          <Footer />
        </body>
      </AuthProviders>
    </html>
  );
}
