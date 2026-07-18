import { site } from '../data/content.js'

const icons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
}

export default function Footer() {
  return (
    <footer className="section footer" id="contact">
      <div className="footer__head">
        <h2 className="section__title">CONTACT</h2>
        <img className="footer__protractor" src="/assets/radar.png" alt="" aria-hidden="true" />
      </div>

      <img className="footer__smiski" src="/assets/late-smiski.png" alt="" aria-hidden="true" />
      <p className="footer__find mono">Find me on:</p>
      <div className="footer__socials">
        {site.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="footer__icon">
            {icons[s.label]}
          </a>
        ))}
      </div>

      <a className="btn btn--pill mono" href={site.resumeUrl} download>
        DOWNLOAD RESUME ↓
      </a>

      <div className="footer__bar mono">
        <span>© {new Date().getFullYear()} Lorraine Sanares. All rights reserved.</span>
        <span className="footer__status">DOCUMENTING THE PROCESS ▮▯▮▯▮▮▯▮</span>
      </div>
    </footer>
  )
}
