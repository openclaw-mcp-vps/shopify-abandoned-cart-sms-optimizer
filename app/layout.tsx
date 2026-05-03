import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMS Cart Recovery Optimizer | Shopify Abandoned Cart",
  description: "Optimize SMS timing for abandoned cart recovery. A/B test messages and send times to maximize Shopify revenue."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a5f52aaf-712f-4f45-a04e-a1bac687fdac"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
