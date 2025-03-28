import { inter, open_sans } from "./ui/fonts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

import "./ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css



"
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-YJ74Y2303D"
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YJ74Y2303D');
            `}
          </Script>
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
                width: "0px",
                height: "0px",
                border: "none",
                display: "none",
                visibility: "hidden",
              }}
            ></iframe>
          </noscript>
        </body>
      </html>
  );
}
