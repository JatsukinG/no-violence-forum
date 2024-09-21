import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import MainBanner from '@/components/HomeDefault/MainBanner'
import AboutUsContent from '@/components/HomeDefault/AboutUsContent'

export default function Home() {
  return (
      <>
        <Navbar/>

        <MainBanner/>

        <AboutUsContent/>

        <Footer/>
      </>
  )
}
