import DesignSite from "./components/myComponents/DesignSite"
import Footer from "./components/myComponents/Footer"
import HeroBanner from "./components/myComponents/HeroBanner"
import Navbar from "./components/myComponents/Navbar"
import Projects from "./components/myComponents/Projects"
import PublishSite from "./components/myComponents/PublishSite"
import Scale from "./components/myComponents/Scale"
// import ServiceType from "./components/myComponents/ServiceType"



function App() {

  return (
    <>
      <Navbar />
      <HeroBanner />
      <DesignSite />
      <PublishSite />
      <Scale />
      <Projects />
      {/* <ServiceType /> */}
      <Footer />
    </>
  )
}

export default App
