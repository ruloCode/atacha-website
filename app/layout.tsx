import { inter, open_sans } from "./ui/fonts";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

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
        <head>
          <meta charSet="utf-8" />

          <Script type="text/javascript" id="g-tag">
            {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5N7J572C');
              `}
          </Script>
        </head>
        <body className={`${open_sans.className} antialiased`}>
          {children}
          <Analytics />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5N7J572C"
              height="0"
              width="0"
              style={{
                width: '0px',
                height: '0px',
                border: 'none',
                display: 'none',
                visibility: 'hidden',
              }}
            ></iframe>
          </noscript>
        </body>
      </html>
    </ClerkProvider>
  );
}
