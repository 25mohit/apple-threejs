import './App.css'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Modal from './components/Modal'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Modal />
    </main>
  )
}

export default App
