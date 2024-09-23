import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import PageBanner from '@/components/Common/PageBanner'
import HowIsTheForum from '@/components/HowIsIt/HowIsTheForum'
import AboutOpenSpace from '@/components/HowIsIt/AboutOpenSpace'
import OpenSpaceReviews from '@/components/HowIsIt/OpenSpaceReviews'

const Page = () => {
  return (
      <>
        <Navbar/>

        <PageBanner
            pageTitle="¿Como es este Foro ?"
            shortText=""
            homePageUrl="/"
            homePageText="Conosca"
            activePageText="Foro no violencia"
            bgImg="/images/no-violence/banner-foro.webp"
        />

        <HowIsTheForum/>

        <AboutOpenSpace/>

        <OpenSpaceReviews/>

        <Footer/>

      </>
  )
}

export default Page