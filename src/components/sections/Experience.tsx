import { lazy, useEffect, useState } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import ExperienceProps from '@/types/ExperienceProps'
import { experiences, filters } from '@/_data/experiences'

const Badge = lazy(() => import('@/components/common/reusable/Badge'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const ExperienceCard = lazy(() => import('@/components/common/ExperienceCard'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Experiences(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  const [filteredExperiences, setFilteredExperiences] = useState<Array<ExperienceProps>>([
    ...experiences
  ])
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])

  const filterExperiences = (newValue: string): void => {
    if (selectedFilters.includes(newValue)) {
      setSelectedFilters(selectedFilters.filter(value => value !== newValue))
      return
    }
    setSelectedFilters([...selectedFilters, newValue])
  }
  const removeselectedFilters = (): void => {
    setSelectedFilters([])
  }

  useEffect((): void => {
    let filtered: ExperienceProps[] = [...experiences]

    if (selectedFilters.length) {
      filtered = experiences.filter((experience: ExperienceProps) => {
        const allTechStacks: string[] = [...experience.techStack]
        return selectedFilters.every((filter: string) => allTechStacks.includes(filter))
      })
    }

    setFilteredExperiences(filtered)
  }, [selectedFilters])

  const experiencesEntry: JSX.Element[] = filteredExperiences.map((experience, index) => (
    <ExperienceCard
      {...experience}
      key={index.toString()}
    />
  ))

  const filterEntry: JSX.Element[] = filters.map(filter => (
    <Badge
      key={filter}
      className='animate-fade-in cursor-pointer !delay-200'
      active={selectedFilters.includes(filter)}
      onClick={(): void => filterExperiences(filter)}
    >
      {filter}
    </Badge>
  ))

  return (
    <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)]')}>
      <div className='pb-6'>
        <Heading1
          className={clsx('animate-fade-in', 'text-primary-dark dark:text-white', 'pb-2 pt-2')}
        >
          Experience
        </Heading1>
          <ul className='flex flex-wrap gap-2'>
            <li className='animate-fade-in inline !delay-200'>Filters:</li>
            {filterEntry}
          </ul>
      </div>
      {!!filteredExperiences.length && (
        <div
          className={clsx(
            'animate-fade-in !delay-300',
            'mx-auto mt-6 md:mt-8',
            'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-1 xl:grid-cols-1'
          )}
        >
          {experiencesEntry}
        </div>
      )}
      {!filteredExperiences.length && (
        <div className='animate-fade-in mt-8 !delay-300'>
          <p className='text-muted-dark dark:text-muted'>
            Results not found.{' '}
            <span onClick={removeselectedFilters}>
              <InlineLink>Clear filters</InlineLink>
            </span>
          </p>
        </div>
      )}
    </Section>
  )
}
