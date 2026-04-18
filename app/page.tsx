import FAQSection from "@/components/faq";
import ContactSection from "@/components/footer";
import GrohairTopBar from "@/components/header";
import VelacheryBeautyBanner from "@/components/hero-section";
import GloskinApartSection from "@/components/logoslider";
import MobileActionBar from "@/components/mobile-bar";
import ScrollToTop from "@/components/scroll-top";
import AppointmentForm from "@/components/offer-highlight";
import SkinOfferSection from "@/components/offersection";
import WhoWeAreSection from "@/components/results-section";
import CTABanner from "@/components/review";
import BeautyServicesSection from "@/components/skinpopup";
import Stats from "@/components/stats";
import ImageGridCarousel from "@/components/video";
import ClinicVideosResponsiveGrid from "@/components/videosection";
import Script from "next/script";

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
      <VelacheryBeautyBanner />
      <Stats />
      <SkinOfferSection />
      <BeautyServicesSection />
      <ImageGridCarousel />
      {/* <ClinicVideosResponsiveGrid /> */}
      <WhoWeAreSection />
      <GloskinApartSection />
      <CTABanner />
      <FAQSection />
      <ContactSection />
      <MobileActionBar />
      <ScrollToTop />
    </main>
  );
}