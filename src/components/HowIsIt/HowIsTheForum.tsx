import React from 'react'
import Image from 'next/image'

const HowIsTheForum: React.FC = () => {
  return (
      <>
        <div className="about-area-two ptb-120 bg-image">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="about-content">
                  <h2>
                    ¿Cómo es el Foro?
                  </h2>

                  <p>
                    El VIII Foro Internacional de Noviolencia introducirá un avance metodológico significativo, enfocado
                    en dinámicas participativas y horizontales. Desde el primer día, los participantes colaborarán en la
                    creación de la agenda principal a través de un Espacio Abierto. Este enfoque metodológico, apoyado
                    por la comunidad de Art of Hosting en Colombia, integrará diversas prácticas como el Café del Mundo,
                    la Pecera, el Círculo de la Palabra, la Indagación Apreciativa, y el Diseño para la Acción Sabia,
                    entre otras. Estas dinámicas facilitarán un intercambio profundo y enriquecedor de ideas,
                    promoviendo acciones concretas para promover la paz y la salud mental comunitaria.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                      src="/images/no-violence/what_it_is.webp"
                      className="about-img1"
                      alt="about"
                      width={750}
                      height={650}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default HowIsTheForum
