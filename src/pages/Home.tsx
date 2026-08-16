import type { ReactNode } from 'react';
import {
  profile,
  education,
  workExperience,
  publications,
  conferenceGroups,
  honorGroups,
  grantsAndFellowships,
} from '../data/content';
import Reveal from '../components/Reveal';
import { MailIcon, LinkedinIcon, ScholarIcon, ArrowUpRight } from '../components/icons';

type EntryProps = {
  logo?: string;
  logoAlt?: string;
  primary: string;
  secondary?: ReactNode;
  meta?: string;
  location?: string;
  date?: string;
  children?: ReactNode;
};

const Entry = ({ logo, logoAlt, primary, secondary, meta, location, date, children }: EntryProps) => (
  <article className="grid gap-4 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_10rem] sm:gap-8">
    <div className="flex min-w-0 gap-4">
      {logo && (
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-white p-1.5">
          <img src={logo} alt={logoAlt ?? ''} className="h-full w-full object-contain" />
        </div>
      )}
      <div className="min-w-0">
        <h3 className="font-semibold leading-snug text-ink">{primary}</h3>
        {secondary && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{secondary}</p>}
        {meta && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{meta}</p>}
        {children}
      </div>
    </div>
    {(location || date) && (
      <div className="text-sm leading-relaxed text-ink-muted sm:text-right">
        {date && <p className="font-medium text-ink-soft">{date}</p>}
        {location && <p>{location}</p>}
      </div>
    )}
  </article>
);

const Authors = ({ list }: { list: string }) => (
  <>
    {list.split(/(Y\.-H\. Tsai)/g).map((segment, index) =>
      segment === 'Y.-H. Tsai' ? <strong key={index} className="font-semibold text-ink">{segment}</strong> : segment
    )}
  </>
);

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="grid gap-6 border-t border-line py-12 md:grid-cols-[12rem_1fr] md:gap-12">
    <Reveal>
      <h2 className="text-2xl font-bold tracking-tight text-ink">{title}</h2>
    </Reveal>
    <div>{children}</div>
  </section>
);

const Subsection = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="border-t border-line-strong pt-4 first:border-t-0 first:pt-0 [&+&]:mt-8">
    <p className="section-label mb-5">{label}</p>
    {children}
  </div>
);

const Home = () => {
  const { contact } = profile;
  const social = [
    { label: 'Email', href: `mailto:${contact.email}`, Icon: MailIcon },
    { label: 'LinkedIn', href: contact.linkedin, Icon: LinkedinIcon },
    { label: 'Google Scholar', href: contact.scholar, Icon: ScholarIcon },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="grid gap-10 py-14 sm:py-20 md:grid-cols-[13rem_1fr] md:items-start md:gap-14">
        <Reveal>
          <div className="mx-auto w-44 overflow-hidden rounded-2xl border border-line-strong bg-surface md:mx-0 md:w-full">
            <img src={profile.photo} alt={profile.name} className="aspect-[4/5] h-full w-full object-cover object-top" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-4xl font-extrabold tracking-[-0.035em] text-ink sm:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-xl font-medium text-ink-soft">{profile.role}</p>

          <div className="mt-7 max-w-3xl space-y-4 text-[15px] leading-7 text-ink-soft">
            {profile.about.map((paragraph, index) => (
              <p key={index}>
                {paragraph.split(/(\*\*[^*]+\*\*)/g).map((segment, part) =>
                  segment.startsWith('**') && segment.endsWith('**') ? (
                    <strong key={part} className="font-semibold text-ink">{segment.slice(2, -2)}</strong>
                  ) : segment
                )}
              </p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {social.map(({ label, href, Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-colors hover:border-accent hover:text-accent">
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-5">
            <p className="section-label mb-3">Research Interests</p>
            <p className="text-sm leading-7 text-ink-soft">{profile.interests.join(' · ')}</p>
          </div>
        </Reveal>
      </section>

      <Section title="Professional Experience">
        {workExperience.map((experience, index) => (
          <Reveal key={experience.title} delay={index * 60}>
            <Entry logo={experience.logo} logoAlt={experience.company} primary={experience.title} secondary={experience.company} location={experience.location} date={experience.period} />
          </Reveal>
        ))}
      </Section>

      <Section title="Education">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 60}>
            <Entry logo={item.logo} logoAlt={item.school} primary={item.degree} secondary={item.school} meta={item.meta} location={item.location} date={item.period} />
          </Reveal>
        ))}
      </Section>

      <Section title="Publications">
        {publications.map((publication, index) => (
          <Reveal key={publication.title} delay={index * 60}>
            <Entry primary={publication.title} secondary={<Authors list={publication.authors} />} meta={[publication.venue, publication.volume].filter(Boolean).join(', ')} date={publication.year}>
              {publication.link ? (
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                  {publication.linkText ?? 'View paper'} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : <p className="mt-2 text-sm text-ink-muted">{publication.linkText ?? publication.status}</p>}
            </Entry>
          </Reveal>
        ))}
      </Section>

      <Section title="Presentations">
        {[...conferenceGroups].reverse().map((group) => (
          <Subsection key={group.label} label={group.label === 'Professional' ? 'Professional' : 'Academic'}>
            {group.items.map((item, index) => (
              <Reveal key={`${item.title}-${item.presentation}`} delay={index * 40}>
                <Entry
                  primary={item.presentation ?? item.title}
                  secondary={<><strong className="font-semibold text-ink">{item.type}</strong><span> · {item.title}</span></>}
                  location={item.location}
                  date={item.date}
                >
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                      View material <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </Entry>
              </Reveal>
            ))}
          </Subsection>
        ))}
      </Section>

      <Section title="Honors & Awards">
        {[...honorGroups].reverse().map((group) => (
          <Subsection key={group.label} label={group.label === 'Professional' ? 'Professional' : 'Academic'}>
            {group.items.map((honor, index) => (
              <Reveal key={honor.title} delay={index * 60}>
                <Entry primary={honor.title} secondary={honor.org} location={honor.location} date={honor.years} />
              </Reveal>
            ))}
          </Subsection>
        ))}
      </Section>

      <Section title="Fellowships">
        {grantsAndFellowships.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <Entry
              primary={item.title}
              secondary={item.organization}
              date={item.period}
              location={item.location}
            />
          </Reveal>
        ))}
      </Section>
    </div>
  );
};

export default Home;
