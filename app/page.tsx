import type { NextPage } from 'next'
import Hero from '../sections/hero';
import About from '@/sections/about';
import Resume from '../sections/resume';
import Education from '@/sections/education';
import Experience from '@/sections/experience';
import Portfolio from '@/sections/portfolio';
import Contribution from '../sections/contribution';
import ContactUs from '../sections/contactus';

const Home: NextPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Resume/>
    
      <Portfolio/>
      <Contribution/>
      <ContactUs/>
    </div>
  )
}

export default Home
