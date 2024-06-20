import React from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import Services from './services'
import Gateway from './gateway'
import GetStarted from './getStarted'
import Values from './values'
import Testimonials from './testimonials'
import WhyUs from './whyus'
import Contact from './contact'
import Footer from './footer'
import Mobnav from './mobnav'

const Landing = () => {
  return (
    <>
      <div className='sm:hidden md:inline-block w-full'>
        <Header />
      </div>
      <div className='sm:inline-block md:hidden'>
        <Mobnav />
      </div>
      <Hero />
      <About />
      <Services />
      <Gateway />
      <GetStarted />
      <Values />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />

    </>
  )
}

export default Landing