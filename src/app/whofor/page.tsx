import Navbar from '@/components/Layouts/Navbar'
import PageBanner from '@/components/Common/PageBanner'
import Footer from '@/components/Layouts/Footer'
import Image from 'next/image'

export default function Page() {
  return (
      <>
        <Navbar/>

        <PageBanner
            pageTitle="¿A quién está dirigido este Foro ?"
            shortText=""
            homePageUrl="/"
            homePageText="Para quién"
            activePageText="Foro no violencia"
            bgImg="/images/no-violence/banner-foro.webp"
        />

        <div className="ptb-120">
          <div className="container">
            <div className="main-textarea">
              <h4 className="content-tittle-1">¿A quién está dirigido este Foro ?</h4>

              <p>
                El Foro Internacional de Noviolencia está dirigido a una diversidad de participantes comprometidos
                con la promoción de la paz y la salud mental comunitaria. Este evento acoge a expertos, activistas,
                académicos, representantes de la sociedad civil y estudiantes, interesados en abordar los desafíos
                actuales desde una perspectiva colaborativa y solidaria. Entre los participantes destacan representantes
                de comunidades de paz que resisten de manera noviolenta a la guerra en Colombia, organizaciones de
                víctimas que buscan a sus desaparecidos, docentes involucrados en procesos de fortalecimiento emocional
                con estudiantes, iniciativas de perdón y reconciliación, esfuerzos comunitarios para abordar las
                adicciones,
                artistas que utilizan su arte para apoyar a quienes enfrentan dificultades, colectivos que promueven la
                crianza
                respetuosa, voluntarios de comunidades compasivas y profesionales de diversas disciplinas. El foro
                facilitará
                un espacio de encuentro entre pares, donde estas experiencias se compartirán, discutirán y conectarán en
                beneficio del bienestar colectivo y la construcción de paz.
              </p>
              <br/>
              <Image
                  src="/images/no-violence/whofor-img.webp"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-100 h-auto"
              />

            </div>
          </div>
        </div>

        <Footer/>
      </>
  )
}