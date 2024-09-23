interface Item {
  title: string
  content?: string
  items?: string[]
}

const items: Item[] = [
  {
    title: '¿Qué es Open Space Technology?',
    content: 'OST es una metodología de facilitación que permite a un grupo de personas abordar temas de interés común de manera autoorganizada y dinámica. En contraste con las conferencias o talleres tradicionales, donde la agenda y el ritmo están predefinidos, OST apuesta por la autonomía de los participantes para establecer sus propias prioridades y fluir entre diferentes temas de forma orgánica.',
  }, {
    title: 'Ley del Open Space',
    content: 'Ley de la movilidad: Esta ley fundamental establece que cada participante tiene la libertad y la responsabilidad de usar sus dos pies para moverse entre diferentes sesiones o abandonar el evento en cualquier momento. Si te encuentras aburrido, no estás aprendiendo o no estás contribuyendo, utiliza tus pies para encontrar un lugar donde tu tiempo sea mejor aprovechado.',
  }, {
    title: 'Principios del Open Space',
    items: [
      'Cualquiera que viene es la persona correcta. Cada participante que asiste al evento tiene algo valioso que aportar y su presencia es bienvenida.',
      'Cualquier cosa que suceda es la única que podría haber sucedido. No existen errores o eventos desafortunados, sino que cada momento forma parte de un proceso de aprendizaje y crecimiento colectivo.',
      'En cualquier momento es el momento adecuado para comenzar. No hay necesidad de esperar a que llegue un momento perfecto, la acción y la participación pueden surgir en cualquier instante.',
      'Cuando termina, se termina. El foro concluye cuando los participantes sienten que han alcanzado sus objetivos o cuando la energía del grupo se disipa naturalmente.',
    ],
  },
]


const AboutOpenSpace = () => {
  return (
      <div className="container">
        <div className="masonry-layout">
          {
            items.map((item, index) => (
                <div key={index} className="masonry-item">
                  <h2>
                    {item.title}
                  </h2>

                  {
                      !!item?.content && <p>{item.content}</p>
                  }

                  {
                      !!item?.items &&
                      <ul>
                        {
                          item.items.map((subItem, index) => (
                              <li key={index}>
                                {subItem}
                              </li>
                          ))
                        }
                      </ul>
                  }
                </div>
            ))
          }
        </div>
      </div>
  )
}

export default AboutOpenSpace