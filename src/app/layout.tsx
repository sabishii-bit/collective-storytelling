import type { Metadata } from "next";
import "./globals.css";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";

export const metadata: Metadata = {
  title: "The Collective Story Telling Group",
  description: "We bring people together to make a positive impact.",
  openGraph: {
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationMenu />
        {children}
      </body>
    </html>
  );
}
