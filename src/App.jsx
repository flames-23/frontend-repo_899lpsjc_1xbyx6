import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
