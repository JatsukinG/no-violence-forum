import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AboutUsContent: React.FC = () => {
  return (
      <>
        <div className="about-area ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="about-content">
                  <span>Únete al evento</span>
                  <h2>
                    VIII FORO INTERNACIONAL DE <b>NOVIOLENCIA</b>
                  </h2>
                  <p>
                    Es un espacio de encuentro de procesos sociales y
                    académicos, nacionales e internacionales que en la actualidad estén construyendo alternativas
                    sobre La Salud Mental Comunitaria.
                    <br/>
                    <br/>
                    Este evento se lleva a cabo cada dos años y constituye una apuesta ética y política por la vida y
                    la dignidad.
                    <br/>
                    <br/>
                    El programa Trabajo Social de la Universidad del Quindío, conjuntamente con otras organizaciones
                    amigas, realiza desde 2009, el Foro Internacional de Noviolencia, siempre relativo a temáticas
                    diversas como las economías para la vida, la defensa de los territorios frente al extractivismo o
                    la crisis y soberanía alimentaria. Nuestros foros representan básicamente un compartir de
                    experiencias, metodologías creativas, saberes y afectos.
                  </p>

                  <Link href="/about-us" className="btn btn-primary">
                    Leer más
                    <i className="icofont-double-right"></i>
                  </Link>

                  <Link href="#" className="btn btn-secondary">
                    Inscríbete ahora
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                      src="/images/about1.jpg"
                      className="about-img1"
                      width={750}
                      height={500}
                      alt="about"
                  />
                  <Image
                      src="/images/about2.jpg"
                      className="about-img2"
                      alt="about"
                      width={309}
                      height={424}
                  />
                  <Image
                      src="/images/shapes/5.png"
                      className="shape-img"
                      alt="about"
                      width={111}
                      height={111}
                  />

                  <Link href="/about-us" className="btn btn-primary">
                    Explore More About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default AboutUsContent
