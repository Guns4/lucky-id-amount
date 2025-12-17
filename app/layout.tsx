import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "LuckyGen",
  description: "LuckyGen — Lucky ID & Nominal Cantik Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
