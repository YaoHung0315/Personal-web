import { useEffect, useRef, useState } from 'react';
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
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close the demo modal on Escape, lock body scroll, and move focus into it.
  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShowVideo(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [showVideo]);

  return (
    <article className="overflow-hidden rounded-2xl border border-line transition-colors hover:border-line-strong">
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
            <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <span className="text-ink-soft">
                {project.publication.link ? (
                  <a
                    href={project.publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    {project.publication.title}
                  </a>
                ) : (
                  <span className="font-medium text-ink">{project.publication.title}</span>
                )}
                <span className="block text-ink-muted">
                  {project.publication.linkText ?? project.publication.status}
                </span>
              </span>
              <span className="flex-shrink-0 text-ink-muted sm:text-right">
                {[project.publication.venue, project.publication.volume]
                  .filter(Boolean)
                  .join(', ')}
                <span className="block">{project.publication.year}</span>
              </span>
            </div>
          </div>
        )}

        {/* Repo link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" /> {project.linkText ?? 'View repository'}
          </a>
        )}
      </div>

      {/* Video modal */}
      {showVideo && project.demo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} demo video`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end bg-black/60 px-2 py-1.5">
              <button
                ref={closeRef}
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M6 6l12 12M6 18 18 6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <video
              src={project.demo}
              controls
              autoPlay
              aria-label={`${project.title} demo`}
              className="w-full"
            />
          </div>
        </div>
      )}
    </article>
  );
};

const groups: { label: string; category: Project['category'] }[] = [
  { label: 'Research Projects', category: 'Research' },
  { label: 'Working Projects', category: 'Working Experience' },
  { label: 'Side Projects', category: 'Side Project' },
];

const Projects = () => (
  <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
    <Reveal>
      <h1 className="text-4xl font-extrabold tracking-[-0.035em] text-ink sm:text-6xl">Projects</h1>
    </Reveal>

    {groups.map((group) => {
      const items = projects.filter((p) => p.category === group.category);
      if (items.length === 0) return null;
      return (
        <section key={group.category} className="mt-16 border-t border-line pt-10">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
                {group.label}
              </h2>
            </div>
            <span className="text-sm tabular-nums text-ink-muted">{String(items.length).padStart(2, '0')}</span>
          </div>
          <div className="space-y-7">
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
