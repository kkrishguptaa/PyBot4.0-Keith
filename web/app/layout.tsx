import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Spectral } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const displayRegular = localFont({
  src: "./fonts/WhyteInktrap-Regular.woff",
  variable: "--font-display-regular",
  weight: "400",
});

const displayMedium = localFont({
  src: "./fonts/WhyteInktrap-Medium.woff",
  variable: "--font-display-medium",
  weight: "500",
});

const displayBold = localFont({
  src: "./fonts/WhyteInktrap-Bold.woff",
  variable: "--font-display-bold",
  weight: "700",
});

const displayHeavy = localFont({
  src: "./fonts/WhyteInktrap-Heavy.woff",
  variable: "--font-display-heavy",
  weight: "800",
});

const displayBlack = localFont({
  src: "./fonts/WhyteInktrap-Black.woff",
  variable: "--font-display-black",
  weight: "900",
});

const text = Spectral({
  variable: "--font-spectral",
  weight: ["400", "600"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Nocturna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${text.variable} ${displayRegular.variable} ${displayMedium.variable} ${displayBold.variable} ${displayHeavy.variable} ${displayBlack.variable} antialiased`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
