import HistoryItem from '@/components/History/HistoryItem'

export interface Resource {
  title: string
  href: string
  type: 'video' | 'document' | 'article'
}

export interface Item {
  time: string
  title: string
  description: string
  resources?: Resource[]
}

const items: Item[] = [
  {
    time: 'Introducción',
    title: 'Presentación',
    description: 'Video promocional de Foro Internacional de Noviolencia',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://youtu.be/d4iIa6JFBxE?si=4l0rR0281HBbaEQs',
        type: 'video',
      },
    ],
  },
  {
    time: '2017',
    title: 'I Encuentro',
    description: 'El primer encuentro se llevo a cabo en la universidad del quindio y conto con muchos participates.',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://youtu.be/AtmffeTsoV0?si=lMN1qpXm56R0i7lj',
        type: 'video',
      }, {
      title: 'Video de pesentación',
        href: 'https://youtu.be/nsCR1XztFDQ?si=CFmNLkdNMm1h9IaS',
        type: 'video',
      }, {
        title: 'Video de pesentación',
          href: 'https://youtu.be/rhur3VofcIc?si=8gyr5WJlgGldMfpr',
          type: 'video',
        },
    ],
  }, { 
    time: '2020',
    title: 'II Encuentro',
    description: 'El segundo encuentro se llevo a cabo en la universidad del quindio y con relacion a tendencias globales alimentación y otros mundos posibles',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://youtu.be/D1kc_I5W-ck?si=Wa2tDgw9ccEBFeVA',
        type: 'video',
      }, {
        title: 'Video de pesentación',
        href: 'https://youtu.be/iGy0NNBcBMI?si=RKXu_Wu-c7ZIbLNZ',
        type: 'video',
      },
    ],
  },  {
    time: '2020',
    title: 'III Encuentro',
    description: 'El tercer encuentro se llevo a cabo en la universidad del quindio y conto con muchos participates.',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://youtu.be/IP_2-YS2Bjo?si=IoZqWUKYd-dHEWdp',
        type: 'video',
      }, {
        title: 'Video de pesentación',
        href: 'https://youtu.be/biEtf9uZ-eY?si=98BiXz3asLT1Jofs',
        type: 'video',
      },{
        title: 'Video de pesentación',
        href: 'https://youtu.be/S8D-SI_YWxM?si=fj6qxspt6fZmOTFV',
        type: 'video',
      },
    ],
  },  {
    time: '2020',
    title: 'IV Encuentro',
    description: 'El cuarto encuentro se llevo a cabo en la universidad del quindio y con YASNAYA AGUILAR',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://youtu.be/EgHlll-jeUc?si=puwvbinIhPOa0WAE',
        type: 'video',
      },
    ],
  },  {
    time: '2020',
    title: 'V Encuentro',
    description: 'El quinto encuentro se llevo a cabo en la universidad del quindio y con relacion a, que nos enseña Venezuela',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://youtu.be/WcE_kaZulYo?si=n8TPg7UofQYrmsp9',
        type: 'video',
      },
    ],
  }, {
    time: '2022',
    title: 'VI Encuentro',
    description: 'El sexto encuentro se llevo a cabo en la universidad del quindio y con relacion a, crisis alimentaria y búsqueda de alternativas',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://www.youtube.com/live/v-hjdlpWb8w?si=Efjl4Az_P-5ohIZF',
        type: 'video',
      },
    ],
  }, {
    time: '2022',
    title: 'VII Encuentro',
    description: 'El primer encuentro se llevo a cabo en la universidad del quindio y conto con muchos participates.',
    resources: [
      {
        title: 'Video de pesentación',
        href: 'https://www.youtube.com/live/36jJXu5IKdc?si=mhDL7qfPeqCYEfBl',
        type: 'video',
      }, {
      title: 'Video de pesentación',
        href: 'https://www.youtube.com/live/M_YY9YS_kD8?si=eeZerQKEnBmsIemG',
        type: 'video',
      },
    ],
  }
]

const ForumHistory = () => {
  return (
      <div className="container">
        <div className="timeline">
          {
            items.map(item => (
                <HistoryItem key={item.title} item={item}/>
            ))
          }
        </div>
      </div>
  )
}

export default ForumHistory