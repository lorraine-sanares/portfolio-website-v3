import { useState } from 'react'
import { photoCollections, photos } from '../data/content.js'

export default function Photography() {
  const [active, setActive] = useState('all')
  const [peek, setPeek] = useState(null)

  const shown = active === 'all' ? photos : photos.filter((p) => p.collection === active)
  const peekPhotos = peek && peek !== 'all' ? photos.filter((p) => p.collection === peek).slice(0, 2) : []

  return (
    <section className="section photography" id="photography">
      <div className="photography__inner">
        <h2 className="section__title">PHOTOGRAPHY</h2>
        <p className="section__sub mono">Like entering a darkroom. Collections:</p>

        <div className="photography__layout">
          <ul className="photography__index mono">
            {photoCollections.map((c) => (
              <li key={c.id}>
                <button
                  className={`photography__link ${active === c.id ? 'is-active' : ''}`}
                  onClick={() => setActive(c.id)}
                  onMouseEnter={() => setPeek(c.id)}
                  onMouseLeave={() => setPeek(null)}
                >
                  {c.label}
                </button>
              </li>
            ))}
            {peekPhotos.length > 0 && (
              <div className="photography__peek" aria-hidden="true">
                {peekPhotos.map((p) => (
                  <img key={p.src} src={p.src} alt="" />
                ))}
              </div>
            )}
          </ul>

          <div className="photography__gallery">
            {shown.map((p) => (
              <figure className="photo" key={p.src}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <figcaption className="mono">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
