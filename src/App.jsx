import { Navbar } from "./comp/navbar"
import { Hero } from "./comp/hero"
import { Skills } from "./comp/skillscomponents"
import { AboutMe } from "./comp/aboutme"
import Testimonials from "./comp/Testimonials"
import { Faq } from "./comp/faq"
import { Footer } from "./comp/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="about"><AboutMe /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="faq"><Faq /></section>
      <Footer />
    </>
  )
}

export default App
