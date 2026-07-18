import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <h2 className="section__title">PROJECTS</h2>

      <div className="projects__grid blueprint-grid reveal">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-card__imgwrap">
              <img src={p.img} alt={p.title} />
              <span className="hud-corner hud-corner--tl" aria-hidden="true" />
              <span className="hud-corner hud-corner--br" aria-hidden="true" />
            </div>
            <h3 className="project-card__title mono">{p.title}</h3>
            <p className="project-card__desc">{p.description}</p>
            <p className="project-card__stack mono">
              {p.stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </p>
            <a className="btn mono" href={p.github} target="_blank" rel="noreferrer">
              VIEW ON GITHUB ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
