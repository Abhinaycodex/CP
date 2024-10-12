import './App.css'
import NavBar from './components/NavBar/NavBar'
import Tabs from './components/Tabs/Tabs'
import HomeSection from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  //useffect -> axios post req 
  // api/properties/location 

  return (
    <>
      <NavBar />
      <br />
      <HomeSection />
      <br />
      <Tabs />
      <Footer />
    </>
  )
}

export default App
