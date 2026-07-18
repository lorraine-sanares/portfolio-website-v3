import { resources, skillsRepo } from '../data/content.js'

export default function Resources() {
  return (
    <section className="section resources" id="resources">
      <h2 className="section__title">RESOURCES</h2>
      <img className="resources__smiski" src="/assets/teaching-smiski.png" alt="" aria-hidden="true" />
      <p className="section__sub mono">
        <b>{resources.intro}</b>
      </p>
      <ul className="resources__list mono reveal">
        {resources.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* ── Agent Skills Repository ── */}
      <div className="skills-repo reveal">
        <div className="skills-repo__head">
          <div>
            <h3 className="skills-repo__title">{skillsRepo.title}</h3>
            <span className="skills-repo__badge mono">{skillsRepo.badge}</span>
          </div>
          <a className="btn mono" href={skillsRepo.github} target="_blank" rel="noreferrer">
            VIEW ON GITHUB ↗
          </a>
        </div>

        <p className="skills-repo__blurb">{skillsRepo.blurb}</p>

        <div className="skills-repo__library">
          {skillsRepo.skills.map((s) => (
            <div className="skill-card mono" key={s.name}>
              <span className="skill-card__glyph" aria-hidden="true">⌘</span>
              <span className="skill-card__name">{s.name}</span>
              <span className="skill-card__cat">FILED UNDER: {s.category}</span>
            </div>
          ))}
        </div>

        <p className="skills-repo__goal mono">{skillsRepo.goal}</p>
      </div>

      <p className="resources__filed mono">FILED UNDER: experiments — STATUS: work in progress</p>
    </section>
  )
}
