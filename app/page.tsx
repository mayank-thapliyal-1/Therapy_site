import React from 'react'
import Hero from './components/Hero'
import GetInTouch from './components/GetInTouch'
import Specialties from './components/Specialties'
import WorkWithMe from './components/WorkWithMe'
import Intro from './components/Intro'
import Faq from './components/Faq'
import { Background } from './components/Background'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import Office from './components/Office'
import Nav from './components/Nav'

const page = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <GetInTouch/>
      <Specialties/>
      <Office/>
      <WorkWithMe/>
      <Intro/>
      <Faq/>
      <Background/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default page