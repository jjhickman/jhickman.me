import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Josh Hickman | Senior Software Engineer</title>
        <meta
          name='description'
          content='Josh Hickman is a professional software engineer with experience in web applications, robotics, platform, and infrastructure.'
        />
        <link
          rel='canonical'
          href='https://jhickman.me'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Hero />
          <FeaturedProjects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
