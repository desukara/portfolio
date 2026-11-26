import Link from "next/link";

const links = [
  { index: "01", label: "About me", href: "/about" },
  { index: "02", label: "Experience", href: "/experience" },
  { index: "03", label: "Teaching work", href: "/portfolio" },
  { index: "04", label: "Résumé", href: "/resume" },
];

export default function SiteHeader({ current }: { current?: string }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="top-strip">
        <span>PERSONAL TEACHING PORTFOLIO</span>
        <span>TOKYO · JAPAN</span>
      </div>
      <header className="site-header shell">
        <Link className="brand" href="/" aria-label="James Simmons — homepage">
          <img src="/brand/js-mark.svg" width={48} height={48} alt="" aria-hidden="true" />
          <span className="brand-wordmark">JAMES SIMMONS<small>ENGLISH TEACHER · TOKYO</small></span>
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {links.map(({ index, label, href }) => (
            <Link key={href} href={href} aria-current={current === href ? "page" : undefined}>
              <span className="nav-index" aria-hidden="true">{index}</span>
              <span className="nav-label">{label}</span>
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/meeting">
          <span>Invite me to interview</span><span className="nav-cta-arrow" aria-hidden="true">→</span>
        </Link>
        <details className="mobile-menu">
          <summary>Explore <span className="menu-toggle" aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">
            {links.map(({ index, label, href }) => (
              <Link key={href} href={href} aria-current={current === href ? "page" : undefined}>
                <span className="nav-index" aria-hidden="true">{index}</span>
                <span className="nav-label">{label}</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
            <Link className="mobile-menu-cta" href="/meeting" aria-current={current === "/meeting" ? "page" : undefined}>
              <span className="nav-label">Invite me to interview</span>
              <span className="nav-arrow" aria-hidden="true">→</span>
            </Link>
          </nav>
        </details>
      </header>
    </>
  );
}
