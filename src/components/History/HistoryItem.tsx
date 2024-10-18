import type { FC } from 'react'
import type { Item } from '@/components/History/ForumHistory'

interface Props {
  item: Item
}

const VideoIcon = () => (
    <span>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 9C2 6.79086 3.79086 5 6 5H13C15.2091 5 17 6.79086 17 9V9.07171L20.202 7.23108C21.0019 6.77121 22 7.34868 22 8.27144V15.7488C22 16.6203 21.1003 17.2012 20.306 16.8424L16.9855 15.3425C16.8118 17.3913 15.0938 19 13 19H6C3.79086 19 2 17.2091 2 15V9ZM17 13.1544L20 14.5096V9.65407L17 11.3786V13.1544ZM15 9C15 7.89543 14.1046 7 13 7H6C4.89543 7 4 7.89543 4 9V15C4 16.1046 4.89543 17 6 17H13C14.1046 17 15 16.1046 15 15V9Z"
            fill="#D17A4B"/>
      </svg>
    </span>
)

const DocumentIcon = () => (
    <span>
      <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.5 5H10.5C8.29086 5 6.5 6.79086 6.5 9V15C6.5 17.2091 8.29086 19 10.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
            stroke="#D17A4B"/>
        <path
            d="M16 9.75C16.4142 9.75 16.75 9.41421 16.75 9C16.75 8.58579 16.4142 8.25 16 8.25V9.75ZM10 8.25C9.58579 8.25 9.25 8.58579 9.25 9C9.25 9.41421 9.58579 9.75 10 9.75V8.25ZM16 12.75C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25V12.75ZM10 11.25C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75V11.25ZM13 15.75C13.4142 15.75 13.75 15.4142 13.75 15C13.75 14.5858 13.4142 14.25 13 14.25V15.75ZM10 14.25C9.58579 14.25 9.25 14.5858 9.25 15C9.25 15.4142 9.58579 15.75 10 15.75V14.25ZM16 8.25H10V9.75H16V8.25ZM16 11.25H10V12.75H16V11.25ZM13 14.25H10V15.75H13V14.25Z"
            fill="#D17A4B"/>
      </svg>
    </span>
)

const HistoryItem: FC<Props> = ({ item }) => {
  return (
      <div className="timeline-row">
        <div className="timeline-time">
          {item.time}
        </div>
        <div className="timeline-content">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          {
              item.resources?.length > 0 &&
              <div className="resources">
                {
                  item.resources?.map(resource => (
                      <div key={resource.href} className="resource-item">
                        {
                            resource.type === 'video' && <VideoIcon/>
                        }
                        {
                            resource.type === 'document' && <DocumentIcon/>
                        }
                        <a href="#">{resource.title}</a>
                      </div>
                  ))
                }
              </div>
          }
        </div>
      </div>
  )
}

export default HistoryItem