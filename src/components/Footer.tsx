import { profile } from '../data/content';
import { MailIcon, LinkedinIcon, ScholarIcon } from './icons';

const Footer = () => {
  const { contact, name } = profile;
  const links = [
    { label: 'Email', href: `mailto:${contact.email}`, Icon: MailIcon },
    { label: 'LinkedIn', href: contact.linkedin, Icon: LinkedinIcon },
    { label: 'Scholar', href: contact.scholar, Icon: ScholarIcon },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
