import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      <Head />
      <body className='text-black'>
        <Main />
        <NextScript />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </body>
    </Html>
  )
}
