import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSection from './components/HeaderSection'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-serif'>
      <HeaderSection />
      <Home />
      <FooterSection />
    </div>
  )
}

export default App
