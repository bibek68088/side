import { Body } from "./components/Body"
import { Footer } from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="wfull- h-[1192px]" style={{backgroundColor: '#B5B6B8'}}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App