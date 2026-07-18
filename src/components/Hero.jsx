import { site, deskItems } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__intro">
        <p className="hero__tagline mono">{site.tagline}</p>
        <p className="hero__est mono">
          {site.estLabel} — {site.statusLabel}
        </p>
      </div>

      <div className="hero__board reveal">
        <p className="hero__board-title mono">A view of my desk:</p>
        <div className="hero__grid">
          {deskItems.map((item) => (
            <a
              key={item.num}
              className="desk-cell"
              href={item.href}
              {...(item.download ? { download: true } : {})}
            >
              <span className="desk-cell__tick" aria-hidden="true">
                ■
              </span>
              <span className="desk-cell__num mono">{item.num}</span>
              <img className="desk-cell__img" src={item.img} alt={item.label} />
              <span className="desk-cell__label mono">{item.label}</span>
              <span className="desk-cell__peek mono">{item.peek}</span>
            </a>
          ))}
        </div>
        <img className="hero__mascot" src="/assets/smiski-laptop.png" alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
