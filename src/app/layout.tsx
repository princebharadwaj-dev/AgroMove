import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "KisanSetu",
  description: "Helps Farmers to grow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
