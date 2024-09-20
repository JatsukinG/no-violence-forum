import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent from "@/components/AboutUsThree/AboutUsContent";
import WhyUs from "@/components/AboutUsThree/WhyUs";
import Speakers from "@/components/HomeThree/Speakers";
import Cta from "@/components/Common/Cta";
import Partner from "@/components/Common/Partner";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";
import FunFact from "@/components/Common/FunFact";
import FooterWhatS from "@/components/Layouts/FooterWhatS";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="FORO NO VIOLENCIA"
        shortText="¿Qué es este Foro?"
        homePageUrl="/"
        homePageText="¿Que es?"
        activePageText="¿Por que es?"
        bgImg="/images/no-violence.jpg"
      />

      <AboutUsContent />
   
      <FooterWhatS />
    </>
  );
}
