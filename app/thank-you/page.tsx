import GrohairTopBar from "@/components/header";
import ThankYouPage from "@/components/thanknavbar";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-11124508870/53JUCOmtz8EZEMaRyrgp'});`}
      </Script>
      <GrohairTopBar />
      <ThankYouPage />
    </div>
  );
};

export default page;
