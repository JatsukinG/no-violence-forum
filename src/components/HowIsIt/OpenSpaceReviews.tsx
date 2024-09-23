'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const reviews = [
  'Open Space me cautivó por su dinámica fluida y enriquecedora. Me encantó elegir los temas que me interesaban y compartir con personas de diversas áreas. En la sesión "Tecnología y salud mental", debatimos ideas fascinantes y llegamos a conclusiones valiosas que sin duda me servirán en mi futuro profesional. Recomiendo ampliamente esta metodología a cualquier persona que busque un espacio para aprender, compartir y conectar con otros de manera significativa. Open Space es una experiencia única que te invita a salir de tu zona de confort y explorar nuevas posibilidades.,',
  'Mi experiencia en Open Space ha sido transformadora como docente. Buscando mejorar mis prácticas y conectar con mis estudiantes, participé en la sesión "Estrategias innovadoras para la enseñanza de las matemáticas". Las ideas que surgieron en este grupo me han inspirado a implementar nuevas técnicas en mis clases y estoy convencido de que tendrán un impacto positivo en el aprendizaje de mis alumnos. Además del valor académico, Open Space me ha permitido conocer a personas de diferentes áreas con las que he podido establecer relaciones profesionales y de amistad. Sin duda, este evento ha sido una experiencia enriquecedora en todos los sentidos.,',
  'Open Space ha sido un oasis de creatividad y colaboración para mi emprendimiento social. Como emprendedora, siempre estoy buscando nuevas ideas y soluciones para los desafíos que enfrento. En la sesión "Fortaleciendo el emprendimiento social en la región", compartí experiencias y estrategias con otros emprendedores. Las valiosas perspectivas que obtuve me han motivado a seguir adelante con mis proyectos. Lo más destacable de Open Space es la energía contagiosa que se genera en el ambiente. Todos los participantes están dispuestos a escuchar, aportar y colaborar, creando una sinergia que impulsa el aprendizaje y la acción colectiva. Sin duda, este evento ha sido una fuente de inspiración y motivación para mí.',
]

const OpenSpaceReviews = () => {
  return (
      <div className="about-area-two ptb-120 bg-image">
        <div className="container">
          <Swiper
              modules={[Autoplay, Pagination]}
              pagination
              loop
              grabCursor
              autoHeight
              autoplay={{ delay: 7000 }}
              spaceBetween={50}
              slidesPerView={1}
              className="rounded overflow-hidden"
          >
            {
              reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="d-flex bg-white p-5 rounded">
                      <p>
                        {review}
                      </p>
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
  )
}

export default OpenSpaceReviews