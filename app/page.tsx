import type { NextPage } from 'next'
import Hero from '../sections/hero';
import About from '@/sections/about';
import Resume from '../sections/resume';
import Education from '@/sections/education';
import Experience from '@/sections/experience';
import Portfolio from '@/sections/portfolio';

const Home: NextPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Resume/>
      <Portfolio/>
      
    </div>
  )
}

export default Home
