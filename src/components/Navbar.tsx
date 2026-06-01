import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon } from './icons';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'CV', href: '/cv' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* ignore */
    }
    setDark(next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-page/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="text-base font-semibold tracking-tight text-ink">
          Yao-Hung Tsai
        </Link>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1 sm:flex">
            {nav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-surface text-ink'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface hover:text-ink"
          >
            {dark ? (
              <SunIcon className="h-[18px] w-[18px]" />
            ) : (
              <MoonIcon className="h-[18px] w-[18px]" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft hover:bg-surface sm:hidden"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
              {open ? (
                <path d="M6 6l12 12M6 18 18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-page/95 backdrop-blur-md transition-all duration-300 sm:hidden ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 py-2">
          {nav.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                pathname === item.href ? 'text-ink' : 'text-ink-muted'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
