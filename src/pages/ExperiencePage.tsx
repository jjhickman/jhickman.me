import Preloader from '@/components/common/Preloader'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Experience = lazy(() => import('@/components/sections/Experience'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function ExperiencePage(): JSX.Element {
  return (
    <Suspense fallback={<Preloader />}>
      <Helmet>
        <title>Experience</title>
        <meta
          name='description'
          content='See my experience!'
        />
        <link
          rel='canonical'
          href='https://jhickman.me/experience'
        />
      </Helmet>
      <PageWrapper>
        <Navbar />
        <Experience />
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}
