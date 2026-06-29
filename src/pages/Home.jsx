import { Hero } from "../comp/hero"
import { Skills } from "../comp/skillscomponents"
import Testimonials from "../comp/Testimonials"
import { AboutMe } from "../comp/aboutme"
import { Faq } from "../comp/faq"
import { Navbar } from "../comp/navbar"
import { Protfolio } from "../comp/portfolio"
export function Home() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="about"><AboutMe /></section>
      <section id="protfolio"><Protfolio /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="faq"><Faq /></section>
    </>
  )
}