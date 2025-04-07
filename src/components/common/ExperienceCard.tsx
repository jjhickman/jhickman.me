import { lazy } from 'react'
import clsx from 'clsx'
import ExperienceProps from '@/types/ExperienceProps'
import Badge from '@/components/common/reusable/Badge'

const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const Card = lazy(() => import('@/components/common/reusable/Card'))

export default function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  link,
  techStack,
  contents
}: ExperienceProps): JSX.Element {
  const techStackEntry = techStack.map(
    (techStack: string, index: number): JSX.Element => (
      <Badge
        key={index}
        className={clsx(
          'mr-2 last-of-type:mr-0',
          'text-base font-medium text-primary-dark dark:text-primary-light'
        )}
      >
        {techStack}
      </Badge>
    )
  )
  return (
    <div style={{ width: "100%"}}
    >
      <Card>
        <Heading3
          className={clsx(
            'text-primary-dark dark:text-white',
            'group-hover:text-primary-lighter-dark group-hover:dark:text-primary-light',
            'group-hover:font',
            '!pb-2'
          )}
        >
          {title}
        </Heading3>
        <div>
          <span>
            <strong className='text-sm text-muted-dark dark:text-muted'>
              <a
                href={link}
                target='_blank'
                className={'group'}
              >
                {company}
              </a>{' '}
              • {`${startDate} - ${endDate}`}
            </strong>
          </span>
        </div>
        <div>
          <span className='text-sm text-muted-dark dark:text-muted'>{location}</span>
          <ul>
            {contents.map(content => {
              return <li key={content}>• {content}</li>
            })}
          </ul>
        </div>
        <div>
          <div className='mb-6 flex flex-wrap'>{techStackEntry}</div>
        </div>
      </Card>
    </div>
  )
}
