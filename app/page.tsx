// app/page.js or wherever your Home component is
import Navbar from './components/Navbar'
import About from './components/About'
import Mission from './components/Mission'
import CoursesSection from './components/CoursesSection'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <Mission />
      <About />
      <CoursesSection />
      <ContactPage />
      <Footer />
    </SmoothScroll>
  )
}
