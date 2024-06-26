import { roboto } from "./fonts";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foo Fest",
  description: "Foo Fest, experience the best music of alle ages!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favIcon.svg" />
      </head>
      <body
        className={` ${roboto.className} grid grid-cols-1 bg-lighter-grey-00 text-white-off-00`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
