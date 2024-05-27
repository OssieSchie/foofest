import { roboto } from "./fonts";
import "./globals.css";
import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foo Fest",
  description: "Foo Fest, experience the best music of alle ages!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.className} grid grid-cols-1 bg-dark-grey-00 text-white-off-00 `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
