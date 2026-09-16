import { about } from '../data/content.js'
import pfp from '../../pfp.jpg'

function highlight(line, i) {
  // very small "syntax highlighter" for the fake editor
  const html = line
    .replace(/(".*?")/g, '<span class="tok-str">$1</span>')
    .replace(/\b(const)\b/g, '<span class="tok-kw">$1</span>')
    .replace(/^(\s*)(location|role|values)(:)/, '$1<span class="tok-key">$2</span>$3')
  return (
    <div className="editor__line" key={i}>
      <span className="editor__ln">{i + 1}</span>
      <span dangerouslySetInnerHTML={{ __html: html || ' ' }} />
    </div>
  )
}

export default function About() {
  return (
    <section className="section about" id="about">
      <h2 className="section__title">ABOUT</h2>
      <img className="about__smiski" src="/assets/lightbulb-smiski.png" alt="" aria-hidden="true" />

      <div className="about__panels reveal">
        <div className="editor mono">
          <div className="editor__tabs">
            <span className="editor__tab editor__tab--active">about.js</span>
            <span className="editor__tab">README.md</span>
          </div>
          <div className="editor__body">{about.code.map(highlight)}</div>
        </div>

        <div className="terminal mono">
          <p className="terminal__title">// currently running</p>
          {about.currentlyRunning.map((r) => (
            <p className="terminal__row" key={r.cmd}>
              <span className={`terminal__cmd terminal__cmd--${r.cmd.toLowerCase()}`}>
                {r.cmd}
              </span>
              {r.text}
            </p>
          ))}
        </div>
      </div>

      <div className="about__statement reveal">
        {/* left column — blueprint schematic with embedded workshop frame */}
        <div className="about__schematic-col" aria-hidden="true">
          <img className="about__micrographics" src="/assets/micrographics.png" alt="" />
          <img
            className="about__stark-frame"
            src={pfp}
            alt="Lorraine holding a mechanical keyboard"
          />
        </div>

        {/* center column — statement text */}
        <div className="about__text-col">
          <ol className="about__statements">
            {about.statement.map((line, i) => (
              <li
                className={`about__big${i === about.statement.length - 1 ? ' about__big--strong' : ''}`}
                key={line}
              >
                {i > 0 && (
                  <span className="about__statement-arrow mono" aria-hidden="true">
                    ↓
                  </span>
                )}
                {line}
                {i === 0 && (
                  <>
                    {' '}
                    <img
                      className="about__keycap"
                      src="/assets/mechanical-key.png"
                      alt=""
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            ))}
          </ol>

          <div className="about__philosophy-row">
            <p className="about__philosophy mono">{about.philosophy}</p>
            <span className="about__arrow mono" aria-hidden="true">
              ←
            </span>
            <span className="about__philosophy-label mono">Philosophies</span>
            <img className="about__statue" src="/assets/statue-head.png" alt="" aria-hidden="true" />
          </div>
        </div>

        <img
          className="about__hexsphere"
          src="/assets/hexagon-sphere.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
