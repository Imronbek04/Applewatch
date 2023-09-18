import React from 'react'
import Header from './page/Header'
import Hero from './components/Hero'
import Center from './components/Center'
import About from './components/About'
import Control from './components/Control'

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Center/>
      <About/>
      <Control/>
    </div>
  )
}
