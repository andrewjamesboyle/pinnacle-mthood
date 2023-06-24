import { MetaTags } from '@redwoodjs/web'


import Contact from 'src/components/Contact/Contact'
import Hero from 'src/components/Hero/Hero'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Hero />

      <Contact />
    </>
  )
}

export default HomePage
