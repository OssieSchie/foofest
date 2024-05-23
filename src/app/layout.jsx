import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foo Fest",
  description: "Foo Fest, have a blast!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-cols-1 bg-dark-grey-00 text-white-off-00 `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
