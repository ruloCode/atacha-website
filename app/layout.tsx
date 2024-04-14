import { inter, open_sans } from "./ui/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import "./ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${open_sans.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
