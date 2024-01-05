import Navbar from "@/components/navbar/navbar"
import Hero from "@/components/hero/hero"
import About from "@/components/about/about"
import Srevices from "@/components/services/services"
import Resume from "@/components/resume/resume"

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Srevices />
      <Resume />
    </div>
  )
}
