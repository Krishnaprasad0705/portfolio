import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnaprasad.dev"),
  title: "Krishna Portfolio",
  description:
    "Portfolio of Krishna Prasad M. Final-Year CSE Student specializing in Data Engineering, Analytics Engineering, ETL Pipelines, Snowflake, Databricks, dbt, SQL, Python, and Power BI.",
  keywords: [
    "Krishna Prasad M",
    "Data Engineer",
    "Data Analyst",
    "Snowflake",
    "Databricks",
    "dbt",
    "Power BI",
    "PySpark",
    "ETL Pipelines",
    "Portfolio",
  ],
  authors: [{ name: "Krishna Prasad M" }],
  creator: "Krishna Prasad M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnaprasad.dev",
    title: "Krishna Portfolio",
    description:
      "Turning raw data into actionable insights and robust data pipelines.",
    siteName: "Krishna Portfolio",
    images: [
      {
        url: "/images/profile/hero.png",
        width: 1200,
        height: 630,
        alt: "Krishna Prasad M — Data Engineer & Data Analyst",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/tabicon.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/tabicon.png",
    apple: "/tabicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} dark scroll-smooth`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-[#050505] text-[#F5F5F5] font-sans antialiased min-h-screen selection:bg-[#FF2028] selection:text-white">
        <div className="film-grain pointer-events-none" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
