import type { Metadata } from "next";
import "../globals.css"; // Reuse global styles

export const metadata: Metadata = {
  title: "Los Angeles Wildfire Victims",
  description: "Supporting those impacted by the Los Angeles wildfires.",
  openGraph: {
    title: "Los Angeles Wildfire Victims",
    description: "Supporting those impacted by the Los Angeles wildfires.",
    locale: "en_US",
    type: "article",
  },
};

export default function LosAngelesWildfireVictimsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
