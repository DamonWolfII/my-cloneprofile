import Navbar from "@/components/navbar/navbar"
import Hero from "@/components/hero/hero"
import About from "@/components/about/about"
import Srevices from "@/components/services/services"
import Resume from "@/components/resume/resume"
import Contact from "@/components/contact/contact"
import Footer from "@/components/footer/footer"

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Srevices />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
