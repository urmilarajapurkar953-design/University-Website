import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subtitle='OUR PROGRAM' title='What We Offer' />
      <Programs />
      <About />
      <Title subtitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subtitle='TESTIMONIALS' title='What The Student Says' />
      <Testimonials />
      <Title subtitle='Contact us' title='Get in touch' />
      <Contact />
      <Footer />
      <Videoplayer />
    </div>
  )
}

export default App
