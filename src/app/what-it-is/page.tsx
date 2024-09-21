import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent from "@/components/AboutUsThree/AboutUsContent";

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
        bgImg="/images/no-violence/no-violence.jpg"
      />

      <AboutUsContent />
   
      <Footer />
    </>
  );
}
