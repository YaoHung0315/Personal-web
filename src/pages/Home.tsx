import { profile, education, workExperience, skills, publications, honors } from '../data/content';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { MailIcon, LinkedinIcon, ScholarIcon, ArrowUpRight } from '../components/icons';

const Home = () => {
  const { contact } = profile;
  const social = [
    { label: 'Email', href: `mailto:${contact.email}`, Icon: MailIcon },
    { label: 'LinkedIn', href: contact.linkedin, Icon: LinkedinIcon },
    { label: 'Scholar', href: contact.scholar, Icon: ScholarIcon },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero / About */}
      <section className="grid grid-cols-1 items-center gap-10 py-12 sm:py-16 md:grid-cols-[1fr_auto]">
        <Reveal>
          <div className="max-w-content">
            <p className="section-label mb-4">About Me</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-ink-soft">
              {profile.role}
              <span className="block text-ink-muted">{profile.affiliation}</span>
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {profile.interests.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              {profile.about.map((p, i) => (
                <p key={i}>
                  {p.split(/(\*\*[^*]+\*\*)/g).map((seg, j) =>
                    seg.startsWith('**') && seg.endsWith('**') ? (
                      <strong key={j} className="font-semibold text-ink">
                        {seg.slice(2, -2)}
                      </strong>
                    ) : (
                      seg
                    )
                  )}
                </p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto h-56 w-56 overflow-hidden rounded-2xl ring-1 ring-line-strong sm:h-64 sm:w-64">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* Education */}
      <section className="border-t border-line py-12">
        <Reveal>
          <SectionHeading id="education" label="Background" title="Education" />
        </Reveal>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-start gap-4 rounded-xl border border-line p-5 transition-colors hover:border-line-strong">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="h-12 w-12 flex-shrink-0 rounded-lg object-contain"
                />
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-ink">{edu.school}</h3>
                    <p className="text-sm text-ink-soft">{edu.degree}</p>
                    <p className="mt-1 text-sm text-ink-muted">{edu.period}</p>
                  </div>
                  <div className="text-sm text-ink-muted sm:text-right">
                    {edu.details.map((d, j) => (
                      <p key={j}>{d}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="border-t border-line py-12">
        <Reveal>
          <SectionHeading id="experience" label="Background" title="Work Experience" />
        </Reveal>
        <div className="space-y-4">
          {workExperience.map((exp, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-start gap-4 rounded-xl border border-line p-5 transition-colors hover:border-line-strong">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-12 w-12 flex-shrink-0 rounded-lg object-contain"
                />
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-ink">{exp.company}</h3>
                    <p className="text-sm text-ink-soft">{exp.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{exp.period}</p>
                  </div>
                  <div className="text-sm text-ink-muted sm:text-right">
                    {exp.details.map((d, j) => (
                      <p key={j}>{d}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-line py-12">
        <Reveal>
          <SectionHeading id="skills" label="Toolbox" title="Skills" />
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="h-full rounded-xl border border-line p-5">
                <h3 className="mb-3 text-sm font-semibold text-ink">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="border-t border-line py-12">
        <Reveal>
          <SectionHeading id="publications" label="Research Output" title="Publications" />
        </Reveal>
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-xl border border-line p-5 transition-colors hover:border-line-strong">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      pub.status === 'Published'
                        ? 'bg-accent-soft text-accent'
                        : pub.status === 'Under Review' || pub.status === 'Manuscript'
                          ? 'bg-amber-50 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300'
                          : 'bg-surface text-ink-muted'
                    }`}
                  >
                    {pub.status}
                  </span>
                  <span className="text-xs text-ink-muted">{pub.year}</span>
                </div>
                <h3 className="font-semibold leading-snug text-ink">{pub.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{pub.authors}</p>
                <p className="text-sm italic text-ink-muted">{pub.venue}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    {pub.linkText ?? 'View paper'} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="border-t border-line py-12">
        <Reveal>
          <SectionHeading id="honors" label="Recognition" title="Honors & Awards" />
        </Reveal>
        <div className="space-y-3">
          {honors.map((h, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="flex flex-col gap-1 rounded-xl border border-line p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-ink">{h.title}</h3>
                  <p className="text-sm text-ink-muted">{h.org}</p>
                </div>
                <p className="whitespace-nowrap text-sm text-ink-muted sm:text-right">
                  {h.years}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
