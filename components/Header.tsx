import { site, whatsappLink } from "@/lib/site";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#beranda" className="logo">
          <span className="logo-mark">❄</span>
          <span>
            Raja<b>AC</b>
          </span>
        </a>

        <nav className="nav">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary header-cta"
        >
          Konsultasi Gratis
        </a>
      </div>
    </header>
  );
}
