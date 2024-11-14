import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iransansFaNum = localFont({
  src: [
    {
      path: "./fonts/IRANSansWeb-FaNum_Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb-FaNum_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb-FaNum_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb-FaNum.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb-FaNum_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansWeb-FaNum_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-iransans-fa-num",
});

const iransans = localFont({
  src: [
    {
      path: "./fonts/IRANSansWeb.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
});

export const metadata: Metadata = {
  title: "خرید بلیط هواپیما و رزرو هتل ارزان داخلی و خارجی | فلای‌تودی",
  description:
    "فلای‌تودی، مرجع خرید ارزانترین قیمت بلیط هواپیما خارجی و داخلی (سیستمی، چارتر و لحظه آخری)، رزرو آنلاین هتل، کِی‌کُجا برای خرید پرواز همیشه ارزان، بلیط قطار و بیمه مسافرتی با پشتیبانی 24 ساعته",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${iransans.variable} ${iransansFaNum.variable}`}>
        {children}
      </body>
    </html>
  );
}
