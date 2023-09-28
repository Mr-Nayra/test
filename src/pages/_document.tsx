import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <Script
        async
        src="https://static.mobilemonkey.com/js/business_ab4f808e-407f-4f79-9c31-885385422c8c-29351683.js"
        ></Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K18N6CKMVE"
        />
        <Script
          id="google-tag"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-K18N6CKMVE', {
                  page_path: window.location.pathname,
                  cookie_flags: 'SameSite=None;Secure'
                });
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
