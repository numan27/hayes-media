import type { Metadata } from "next";
import {
  Montserrat,
  Red_Hat_Display,
  Raleway,
  Titillium_Web,
} from "next/font/google";
import localFont from "next/font/local";
import classNames from "classnames";
import "./globals.css";
import "./styles.scss";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import CustomProvider from "redux/provider";
import "aos/dist/aos.css";
import AOS from "aos";
import CustomProvider from "_shared/provider";

export const metadata: Metadata = {
  title: "Hayes Media",
  description:
    "Hayes Media is a marketing agency with an emotionally intelligent approach.",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  subsets: ["latin"],
});
const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  display: "swap",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  display: "swap",
  subsets: ["latin"],
});
const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  display: "swap",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const nexaBold = localFont({
  src: [
    {
      path: "./_assets/fonts/Nexa Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nexa-bold",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration in milliseconds
  //     offset: 200, // Offset from the element before animation starts
  //     easing: "ease-in-out", // Default easing for animations
  //     once: false, // Ensure animations trigger every time the element is in view
  //     mirror: true, // Allow animations to repeat on scroll up and down
  //   });
  // }, []);

  return (
    <html
      lang="en"
      className={classNames(
        montserrat.variable,
        nexaBold.variable,
        redHatDisplay.variable,
        raleway.variable,
        titilliumWeb.variable
      )}
    >
      <head>
        <meta property="og:title" content="Hayes Media" />
        <meta
          property="og:description"
          content="Hayes Media is a marketing agency with an emotionally intelligent approach."
        />
        <link rel="icon" href="/logo-icon.png" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
      </head>
      <body>
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
