import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import ForumHistory from '@/components/History/ForumHistory'
import PageBanner from '@/components/Common/PageBanner'

export default function History() {
  return (
      <>
        <Navbar/>

        <PageBanner
            pageTitle="Nuestra historia"
            shortText="Todas las ediciones"
            homePageUrl="/"
            homePageText="¿Que es?"
            activePageText="¿Por que es?"
            bgImg="/images/no-violence/no-violence.jpg"
        />

        <ForumHistory/>

        <Footer/>
      </>
  )
}
