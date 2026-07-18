import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Blueprints from './components/Blueprints.jsx'
import Resources from './components/Resources.jsx'
import Photography from './components/Photography.jsx'
import Footer from './components/Footer.jsx'

const isPhotoPage = window.location.pathname === '/photography'

export default function App() {
  // photography page opens in dark mode — like entering a darkroom
  const [theme, setTheme] = useState(isPhotoPage ? 'dark' : 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        currentPage={isPhotoPage ? 'photography' : 'home'}
      />
      <main>
        {isPhotoPage ? (
          <Photography />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Blueprints />
            <Resources />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
