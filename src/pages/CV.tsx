import { profile } from '../data/content';
import Reveal from '../components/Reveal';
import { DownloadIcon, ArrowUpRight } from '../components/icons';

const CV = () => (
  <div className="mx-auto max-w-5xl px-6 py-12">
    <Reveal>
      <p className="section-label mb-3">Curriculum Vitae</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">CV</h1>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={profile.cv}
          download
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-page transition-colors hover:bg-accent"
        >
          <DownloadIcon className="h-4 w-4" /> Download CV (PDF)
        </a>
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Open in new tab <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Reveal>

    <Reveal delay={120}>
      <div className="mt-10 overflow-hidden rounded-2xl border border-line-strong">
        <object data={profile.cv} type="application/pdf" className="h-[80vh] w-full">
          <div className="flex h-64 flex-col items-center justify-center gap-3 p-8 text-center">
            <p className="text-ink-soft">
              Your browser can&apos;t display the PDF inline.
            </p>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-page hover:bg-accent"
            >
              <DownloadIcon className="h-4 w-4" /> Download CV
            </a>
          </div>
        </object>
      </div>
    </Reveal>
  </div>
);

export default CV;
