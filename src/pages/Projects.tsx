import { useState } from 'react';
import { projects, type Project } from '../data/content';
import Reveal from '../components/Reveal';
import { GithubIcon, PlayIcon } from '../components/icons';

const imageMaxH: Record<NonNullable<Project['imageSize']>, string> = {
  sm: 'max-h-[380px]',
  md: 'max-h-[460px]',
  lg: 'max-h-[600px]',
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-line">
      {/* Media */}
      {project.image && (
        <div className="relative flex justify-center overflow-hidden border-b border-line bg-surface p-3">
          <img
            src={project.image}
            alt={project.title}
            className={`${imageMaxH[project.imageSize ?? 'md']} w-auto max-w-full object-contain`}
          />
          {project.demo && (
            <button
              onClick={() => setShowVideo(true)}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-page/90 px-3 py-1.5 text-sm font-medium text-ink shadow-sm backdrop-blur transition-colors hover:bg-page"
            >
              <PlayIcon className="h-4 w-4" /> Demo
            </button>
          )}
        </div>
      )}

      <div className="p-6">
        {project.tags && project.tags.length > 0 && (
          <p className="section-label mb-2">{project.tags.join('  ·  ')}</p>
        )}
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-bold tracking-tight text-ink">{project.title}</h3>
          {project.period && <span className="text-sm text-ink-muted">{project.period}</span>}
        </div>
        {project.org && <p className="mt-1 text-sm text-ink-muted">{project.org}</p>}

        {project.description && project.description.length > 0 && (
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {project.bullets && project.bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {project.highlights.map((h) => (
              <div key={h.title} className="rounded-lg bg-surface p-4">
                <h4 className="text-sm font-semibold text-ink">{h.title}</h4>
                <p className="mt-1 text-sm text-ink-muted">{h.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {/* Publication */}
        {project.publication && (
          <div className="mt-4 border-t border-line pt-4">
            <p className="section-label mb-2">Publication</p>
            <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span className="text-ink-soft">
                <span
                  className={`mr-2 rounded px-1.5 py-0.5 text-xs font-medium ${
                    project.publication.status === 'Published'
                      ? 'bg-accent-soft text-accent'
                      : project.publication.status === 'Under Review' ||
                          project.publication.status === 'Manuscript'
                        ? 'bg-amber-50 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300'
                        : 'bg-surface text-ink-muted'
                  }`}
                >
                  {project.publication.status}
                </span>
                {project.publication.link ? (
                  <a
                    href={project.publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent hover:underline"
                  >
                    {project.publication.title}
                  </a>
                ) : (
                  <span className="font-medium text-ink">{project.publication.title}</span>
                )}
              </span>
              <span className="whitespace-nowrap italic text-ink-muted">
                {project.publication.venue}, {project.publication.year}
              </span>
            </div>
          </div>
        )}

        {/* Conferences */}
        {project.conferences && project.conferences.length > 0 && (
          <div className="mt-4 border-t border-line pt-4">
            <p className="section-label mb-2">Conference Presentations</p>
            <ul className="space-y-2">
              {project.conferences.map((c, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-ink-soft">
                    <span className="mr-2 rounded bg-surface px-1.5 py-0.5 text-xs font-medium text-ink-muted">
                      {c.type}
                    </span>
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent hover:underline"
                      >
                        {c.title}
                      </a>
                    ) : (
                      c.title
                    )}
                  </span>
                  {(c.location || c.date) && (
                    <span className="whitespace-nowrap text-ink-muted">
                      {[c.location, c.date].filter(Boolean).join(' · ')}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Repo link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" /> {project.linkText ?? 'View repository'}
          </a>
        )}
      </div>

      {/* Video modal */}
      {showVideo && project.demo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={project.demo} controls autoPlay className="w-full" />
          </div>
        </div>
      )}
    </article>
  );
};

const groups: { label: string; category: Project['category'] }[] = [
  { label: 'Research Projects', category: 'Research' },
  { label: 'Working Projects', category: 'Working Experience' },
  { label: 'Side Project', category: 'Side Project' },
];

const Projects = () => (
  <div className="mx-auto max-w-5xl px-6 py-12">
    <Reveal>
      <p className="section-label mb-3">Selected Work</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Projects</h1>
    </Reveal>

    {groups.map((group) => {
      const items = projects.filter((p) => p.category === group.category);
      if (items.length === 0) return null;
      return (
        <section key={group.category} className="mt-14">
          <h2 className="mb-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {group.label}
          </h2>
          <div className="space-y-8">
            {items.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      );
    })}
  </div>
);

export default Projects;
