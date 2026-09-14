// Semua konten & konfigurasi website dikumpulkan di sini biar gampang diedit.
export const site = {
  name: "RajaAC",
  tagline: "Kontraktor, Distributor & Retail AC Terlengkap",
  // Ganti dengan nomor WhatsApp asli (format internasional tanpa + dan tanpa spasi)
  whatsapp: "6281234567890",
  whatsappMessage: "Halo RajaAC, saya ingin bertanya seputar kebutuhan AC saya.",
  email: "info@rajaac.com",
  phoneDisplay: "+62 812-3456-7890",
  experienceYears: 30,
  hero: {
    heading: "Solusi Tata Udara untuk Setiap Kebutuhan Anda",
    subheading:
      "RajaAC adalah Retail, Distributor, dan Kontraktor AC yang dipercaya untuk proyek residential maupun komersial. Air Conditioning Specialist dengan pengalaman lebih dari 30 tahun di bidang tata udara.",
  },
  about: {
    heading: "Tentang RajaAC",
    body: [
      "RajaAC adalah Retail, Distributor, dan Kontraktor AC yang sudah dipercaya oleh partner sejak lama, menangani proyek skala residential maupun komersial.",
      "Sebagai Distributor AC berpengalaman, RajaAC dikenal sebagai Specialist AC untuk segala kebutuhan seperti AC Split, AC Cassette, AC Floor Standing, sampai AC besar seperti AC VRV / VRF, AC Duct, atau Chiller — begitu juga untuk tata udara seperti Sistem Ventilasi (Ventilation System).",
      "Kami hadir dengan tujuan membangun kepercayaan sebagai mitra dalam memberikan solusi dan menangani setiap kebutuhan AC Anda, baik dalam skala residensial, komersial, maupun industrial di seluruh Indonesia.",
    ],
  },
  services: [
    {
      title: "Retail",
      description:
        "Melayani kebutuhan AC retail Anda dalam skala residential, untuk mendapatkan harga dan pelayanan instalasi AC terbaik.",
      icon: "🏠",
    },
    {
      title: "Distributor & Supplier",
      description:
        "Memberikan akses kepada dealer AC dan perusahaan dalam mendapatkan harga yang kompetitif dan menjalin hubungan yang baik.",
      icon: "📦",
    },
    {
      title: "Proyek & Kontraktor",
      description:
        "Mendukung kebutuhan kontraktor AC dalam skala proyek, baik swasta hingga pemerintahan di Indonesia.",
      icon: "🏗️",
    },
  ],
  products: [
    "AC Split",
    "AC Cassette",
    "AC Floor Standing",
    "AC VRV / VRF",
    "AC Duct",
    "Chiller",
    "Ventilation System",
  ],
  nav: [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#layanan" },
    { label: "Produk", href: "#produk" },
    { label: "Tentang", href: "#tentang" },
    { label: "Kontak", href: "#kontak" },
  ],
};

export function whatsappLink() {
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
