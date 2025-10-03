import Navbar from './components/Navbar'
import About from './components/About'
import Mission from './components/Mission'
import CoursesSection from './components/CoursesSection'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Mission />
      <About />
      <CoursesSection />
      <ContactPage/> 
          <Footer />
      
    </main>
  )
}