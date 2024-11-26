import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Colleboration from './components/Colleboration';
import Services from './components/Services';
import Pricing from './components/Pricing';


function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header/>
      <Hero/>
      <Benefits/>
      <Colleboration/>
      <Services/>
      <Pricing/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App