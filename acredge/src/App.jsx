
import { Text } from '@chakra-ui/react'
import './App.css'
import Projects from './components/project'
import NavSection from './components/NavSection'
import RelatedSearch from './components/Related'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div>
       <NavSection/>
    <Projects/>
    <RelatedSearch/>
    <Faq/>
    <Footer/>
      </div>
    
    </>
  )
}

export default App
