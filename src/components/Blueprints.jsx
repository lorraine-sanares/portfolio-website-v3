import { blueprints } from '../data/content.js'

export default function Blueprints() {
  return (
    <section className="section blueprints" id="blueprints">
      <h2 className="section__title">BLUEPRINTS</h2>
      <p className="section__sub mono">
        Many ideas, many unstarted projects. Here are some coming up in the pipeline:
      </p>

      <div className="blueprints__row reveal">
        {blueprints.map((b) => (
          <div className="blueprint" key={b.name}>
            <img className="folder-icon" src="/assets/blue-folder.png" alt="" aria-hidden="true" />
            <p className="blueprint__spec mono">
              <span>
                <b>NAME:</b> {b.name}
              </span>
              <span>
                <b>START:</b> {b.start}
              </span>
              <span>
                <b>STATUS:</b> {b.status}
              </span>
            </p>
          </div>
        ))}

        <img className="blueprints__axis" src="/assets/math.png" alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
