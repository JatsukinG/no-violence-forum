'use client'

import React from 'react'
import Image from 'next/image'

const AboutUsContent: React.FC = () => {
  return (
      <>
        <div className="about-area-two ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                      src="/images/no-violence/what_it_is.webp"
                      className="about-img1"
                      alt="about"
                      width={640}
                      height={640}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-content">
                  <span>UNETE</span>
                  <h2>
                    ¿Qué es este Foro?
                  </h2>
                  <p>
                    El VIII FORO INTERNACIONAL DE NOVIOLENCIA es un espacio de encuentro de procesos sociales y
                    académicos,
                    nacionales e internacionales que en la actualidad estén construyendo alternativas sobre
                    La Salud Mental Comunitaria.
                  </p>
                  <h6>
                    Este evento se lleva a cabo cada dos años y constituye una apuesta ética y política por la vida y
                    la dignidad.
                  </h6>
                  <p>
                    El programa Trabajo Social de la Universidad del Quindío, conjuntamente con otras organizaciones
                    amigas,
                    realiza desde 2009, el Foro Internacional de Noviolencia, siempre relativo a temáticas diversas
                    como
                    las economías para la vida, la defensa de los territorios frente al extractivismo o la crisis y
                    soberanía alimentaria. Nuestros foros representan básicamente un compartir de experiencias,
                    metodologías creativas, saberes y afectos.
                  </p>


                </div>

              </div>
            </div>
            <br/>
            <h2>
              Fecha y lugar del evento
              Universidad del Quindío, Armenia, Colombia
              entre el 23 y 25 de octubre de 2024.
            </h2>
            <p>
              Para su realización, contamos con los aportes de diversos actores: Docentes, estudiantes,
              custodios de semillas, mercados agroecológicos, cocineras ancestrales, universidades,
              instituciones, emprendedores, familias locales y otros cómplices de la vida, hacen realidad el evento.
              Ellos y ellas, abren las puertas de sus hogares para el hospedaje solidario de invitados,
              proporcionan productos agrícolas del territorio para la alimentación, ofrecen vehículos para el
              transporte local, tiquetes aéreos, tiempo de voluntariado, entre otros recursos.
            </p>

            <p>
              Esta manera solidaria de organizar el Foro es, en sí misma, una forma de noviolencia que
              promueve la cooperación y el apoyo mutuo. Como siempre, el Foro será gratuito. y procuraremos
              configurar una red solidaria para gestionar el transporte compartido desde otras regiones del
              país y el alojamiento en el Quindío para las personas invitadas.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                      src="/images/no-violence/banner-foro.webp"
                      className="about-img1"
                      alt="about"
                      width={640}
                      height={619}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-content">
                  <h2 className="content-tittle-1">
                    ¿Por qué este Foro sobre Salud mental comunitaria?
                  </h2>
                  <p>
                    En la presente edición, asumimos el reto de visibilizar experiencias de salud mental comunitaria
                    para
                    crear geografías de la esperanza, compuesta por iniciativas individuales y colectivas que
                    construyen
                    alternativas en los ámbitos nacional e internacional. Estas experiencias, profundamente
                    inspiradoras y
                    transformadoras, estarán presentes en nuestro evento para ser compartidas y tejidas con otros
                    procesos en
                    favor de la convivencia y la salud mental y emocional.
                  </p>
                  <p>
                    <strong>La salud mental comunitaria*</strong> Se refiere a las estrategias autónomas desarrolladas
                    por las comunidades para
                    abordar las necesidades emocionales y psicológicas de sus integrantes fuera del contexto médico y
                    farmacológico tradicional. Estas iniciativas surgen como respuesta a la falta de acceso a servicios
                    especializados y critican el paradigma capitalista e individualista, que excluye a muchos al exigir
                    que
                    cada persona resuelva sus problemas emocionales por sí misma. En cambio, la salud mental
                    comunitaria
                    promueve soluciones colectivas, basadas en el apoyo mutuo y la participación activa, reconociendo
                    la
                    salud mental como un derecho humano y una responsabilidad compartida. Este enfoque se fundamenta en
                    prácticas que fortalecen las redes de apoyo, crean espacios de diálogo y fomentan actividades
                    colectivas
                    que mejoran el bienestar emocional y la resiliencia.
                  </p>
                </div>

              </div>
              <p>
                El <strong>Foro Internacional de Noviolencia</strong> busca crear un espacio significativo que
                fortalezca y visibilice las
                iniciativas comunitarias de salud mental. Nos proponemos facilitar un diálogo activo y acciones
                concretas
                que promuevan la colaboración entre diversos actores. A través de dinámicas que faciliten la
                retroalimentación
                y el tejido de sinergias, aspiramos a aportar a la construcción de &quot;geografías de la
                esperanza&quot;. Estas,
                serán mapas vivos de experiencias inspiradoras que motiven acciones reflexivas y colaborativas, en
                favor
                de sociedades más justas y solidarias.
              </p>
            </div>
          </div>
        </div>
      </>
  )
}

export default AboutUsContent
