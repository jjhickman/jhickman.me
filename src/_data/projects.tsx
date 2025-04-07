import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const github: LinkProps = {
  label: 'Source code',
  icon: <GithubFillIcon size={22} />
}

const live: LinkProps = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={22} />
}

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }]
  if (url) {
    links.push({ ...live, url })
  }
  return links
}

const filters: string[] = [
  'React',
  'Express',
  'Laravel',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'RabbitMQ',
  'Kubernetes',
  'Node.js',
  'Tensorflow Lite',
  'Python',
  'MySQL',
  'AWS',
  'Docker'
]

const projects: ProjectProps[] = [
  {
    slug: 'jhickman.me',
    featured: true,
    title: 'jhickman.me',
    description: 'This website! My personal portfolio.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('jhickman.me', 'https://jhickman.me')
  },
  {
    slug: 'elastic-visitor-analytics',
    featured: true,
    title: 'Elastic Visitor Analytics',
    description: 'Analytics on visits to my website from Cloudfront logs.',
    techStacks: ['Java', 'MySQL', 'AWS'],
    otherTechStacks: [],
    category: 'Back-end development',
    links: getLinks('elastic-visitor-analytics')
  },
  {
    slug: 'panoptix',
    featured: true,
    title: 'Panoptix: Smart Security System',
    description: 'Smart security system using a cluster of Raspberry Pis, Tensorflow Lite, and AWS.',
    techStacks: ['Node.js', 'Tensorflow Lite', 'Python', 'AWS', 'Docker', 'Kubernetes', 'RabbitMQ'],
    otherTechStacks: [],
    category: 'IoT',
    links: getLinks('panoptix')
  }
]

export { filters, projects }
