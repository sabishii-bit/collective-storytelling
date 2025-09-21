import type { Metadata } from "next";
import "../globals.css"; // Reuse global styles

export const metadata: Metadata = {
  title: "Donations",
  description: "Donations for the Collective Storytelling Group.",
  openGraph: {
    title: "Los Angeles Wildfire Victims",
    description: "Donations for the Collective Storytelling Group.",
    locale: "en_US",
    type: "article",
  },
};

export default function DonationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
