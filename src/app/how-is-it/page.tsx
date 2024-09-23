import Navbar from '@/components/Layouts/Navbar'
import PageBanner from '@/components/Common/PageBanner'
import HowIsTheForum from '@/components/HowIsIt/HowIsTheForum'
import AboutOpenSpace from '@/components/HowIsIt/AboutOpenSpace'

const Page = () => {
  return (
      <>
        <Navbar/>

        <PageBanner
            pageTitle="¿Como es este Foro ?"
            shortText=""
            homePageUrl="/"
            homePageText="Para quién"
            activePageText="Foro no violencia"
            bgImg="/images/no-violence/banner-foro.webp"
        />

        <HowIsTheForum/>

        <AboutOpenSpace/>

      </>
  )
}

export default Page