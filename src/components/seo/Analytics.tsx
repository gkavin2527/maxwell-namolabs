"use client";

import Script from "next/script";
import { siteConfig } from "@/content/site-config";

export function Analytics() {
  if (!siteConfig.gtmId) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;if(f&&f.parentNode){f.parentNode.insertBefore(j,f);}else{(d.head||d.body||d.documentElement).appendChild(j);}
})(window,document,'script','dataLayer','${siteConfig.gtmId}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}

