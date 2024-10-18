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
    time: '2021',
    title: 'I Encuentro',
    description: 'El primer encuentro se llevo a cabo en la universidad del quindio y conto con muchos participates.',
    resources: [
      {
        title: 'Video de pesentación',
        href: '#',
        type: 'video',
      }, {
      title: 'Reglas de comportamiento',
        href: '#',
        type: 'document',
      },
    ],
  }, {
    time: '2022',
    title: 'II Encuentro',
    description: 'El segundo encuentro se llevo a cabo en la universidad del quindio y conto con muchos participates.',
    resources: [
      {
        title: 'Video de pesentación',
        href: '#',
        type: 'video',
      },
    ],
  },
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