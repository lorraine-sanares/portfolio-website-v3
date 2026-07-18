import { useEffect, useState } from 'react'
import { site } from '../data/content.js'

function melbourneTime() {
  return new Intl.DateTimeFormat('en-AU', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Australia/Melbourne',
  })
    .format(new Date())
    .toUpperCase()
}

export default function Nav({ theme, onToggleTheme, currentPage = 'home' }) {
  const [time, setTime] = useState(melbourneTime())

  useEffect(() => {
    const id = setInterval(() => setTime(melbourneTime()), 15_000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="nav">
      <div className="nav__row">
        <a href="/" className="nav__name">
          {site.name}
        </a>
        <nav className="nav__links">
          <button
            className="nav__toggle"
            onClick={onToggleTheme}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </button>
          <a href="/#about">ABOUT</a>
          <a href="/#projects">PROJECTS</a>
          <a
            href="/photography"
            className={currentPage === 'photography' ? 'nav__link--active' : ''}
          >
            PHOTOGRAPHY
          </a>
          <a href="/#contact">CONTACT</a>
          <span className="nav__clock">
            <span className="nav__clock-label">LOCAL TIME</span>
            <span className="nav__clock-time">MEL {time}</span>
          </span>
        </nav>
      </div>
      <div className="nav__hud">
        <span className="nav__hud-glyph" aria-hidden="true">
          <svg viewBox="0 0 20 20" width="14" height="14">
            <rect x="1" y="1" width="18" height="18" fill="none" stroke="currentColor" />
            <line x1="1" y1="19" x2="19" y2="1" stroke="currentColor" />
          </svg>
        </span>
        <span className="nav__hud-r">R</span>
        <span className="nav__hud-track" aria-hidden="true" />
        <span className="nav__hud-label">{site.hudLabel}</span>
      </div>
    </header>
  )
}
