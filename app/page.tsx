import FAQSection from "@/components/faq";
import ContactSection from "@/components/footer";
import GrohairTopBar from "@/components/header";
import MobileActionBar from "@/components/mobile-bar";
import ScrollToTop from "@/components/scroll-top";
import ImageGridCarousel from "@/components/video";
import ClinicInfoBanner from "@/components/clinic-info-banner";
import PigmentationTreatments from "@/components/pigmentation-treatments";
import AntiAgeingTreatments from "@/components/antiageing-treatments";
import FacialPeelingTreatment from "@/components/facial-peeling-treatment";
import Script from "next/script";
import SkinTreatments from "@/components/treatments";
import SkinConditions from "@/components/skin-conditions";
import WhyChooseUs from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <main className="bg-background">
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vpuoes0psh");
          `
        }}
      />
      <GrohairTopBar />
      <ClinicInfoBanner />
      <PigmentationTreatments />
      <WhyChooseUs />
      <AntiAgeingTreatments />
      <ImageGridCarousel />
      <SkinTreatments />
      <FacialPeelingTreatment />
      <SkinConditions />
      {/* <FAQSection /> */}
      <ContactSection />
      <MobileActionBar />
      <ScrollToTop />
    </main>
  );
}
