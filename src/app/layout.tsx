import Header from "@/components/Header";
import ModalNickname from "@/components/modals/modalNickname";
import localFont from "next/font/local";
import UserProvider from "./context/userContext";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Header
        title="All your data here"
        description="Discover daily Product Hunt launches enhanced with AI-generated deck information including problem statements, solutions, TAM, and more."
        keywords="Product Hunt, AI, startup decks, market analysis, TAM, product launch"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen`}
      >
        <Providers>
          <UserProvider>
            <ModalNickname />
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
