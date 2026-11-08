import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {
  About,
  Awards,
  Contact,
  Experience,
  Expertise,
  Footer,
  Highlights,
  Publications,
  Reviews,
  TechAsdy,
  Workshops,
} from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Highlights />
        <Awards />
        <Publications />
        <Expertise />
        <TechAsdy />
        <Workshops />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
