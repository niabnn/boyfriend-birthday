import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Boyfriend's Birthday",
    template: "%s | chronark.com",
  },
  description: "Happy Birthday website for long distance love",
  openGraph: {
    title: "Happy Birthday Brett!",
    description:
      "Happy Birthday website for long distance love",
    url: "https://boyfriend-birthday.vercel.app/",
    siteName: "Boyfriend's Birthday",
    images: [{ url: "/logo.jpeg" }
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/logo.jpeg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const cormorant = LocalFont({
  src: "../public/fonts/Cormorant-VariableFont_wght.ttf",
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-[#FFF9E1] ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}