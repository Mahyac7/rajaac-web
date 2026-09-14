import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section id="beranda" className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Air Conditioning Specialist</span>
              <h1>{site.hero.heading}</h1>
              <p>{site.hero.subheading}</p>
              <div className="hero-actions">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Konsultasi via WhatsApp
                </a>
                <a href="#layanan" className="btn btn-outline">
                  Lihat Layanan
                </a>
              </div>
              <div className="stats">
                <div className="stat">
                  <b>{site.experienceYears}+</b>
                  <span>Tahun Pengalaman</span>
                </div>
                <div className="stat">
                  <b>3</b>
                  <span>Lini Layanan</span>
                </div>
                <div className="stat">
                  <b>100%</b>
                  <span>Skala Nasional</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <span className="big">❄️</span>
              <span className="badge">Split · Cassette · VRV · Chiller</span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="layanan" className="section">
          <div className="container">
            <span className="eyebrow">Layanan Kami</span>
            <h2 className="section-title">Satu Mitra untuk Semua Kebutuhan AC</h2>
            <p className="section-lead">
              Dari kebutuhan rumah tangga hingga proyek berskala besar, kami siap
              menjadi partner tata udara Anda.
            </p>
            <div className="cards">
              {site.services.map((s) => (
                <article key={s.title} className="card">
                  <div className="icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="produk" className="section section-soft">
          <div className="container">
            <span className="eyebrow">Produk & Sistem</span>
            <h2 className="section-title">Spesialis Segala Jenis AC & Tata Udara</h2>
            <p className="section-lead">
              Kami menangani berbagai tipe unit, dari AC Split residensial hingga
              sistem pendingin skala industrial.
            </p>
            <div className="chips">
              {site.products.map((p) => (
                <span key={p} className="chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="tentang" className="section">
          <div className="container about-grid">
            <div className="about-body">
              <span className="eyebrow">Tentang Kami</span>
              <h2 className="section-title">{site.about.heading}</h2>
              {site.about.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="about-visual">
              <div>
                <div className="years">{site.experienceYears}</div>
                <div>Tahun pengalaman di bidang tata udara</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="kontak" className="section">
          <div className="container">
            <div className="cta">
              <h2>Siap Membantu Kebutuhan AC Anda</h2>
              <p>
                Konsultasikan kebutuhan tata udara Anda dengan tim ACWahana. Kami
                berikan solusi terbaik untuk skala residensial, komersial, maupun
                industrial.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo" style={{ color: "#fff", marginBottom: 12 }}>
              <span className="logo-mark">❄</span>
              <span>ACWahana</span>
            </div>
            <p style={{ maxWidth: 360 }}>
              Retail, Distributor, dan Kontraktor AC yang dipercaya untuk proyek
              residential maupun komersial di seluruh Indonesia.
            </p>
          </div>
          <div>
            <h4>Navigasi</h4>
            <ul>
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
