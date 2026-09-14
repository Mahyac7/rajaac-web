import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export jadi web statis (HTML/CSS/JS) → siap di-upload ke cPanel Dewaweb.
  // Hasil build ada di folder `out/`.
  output: "export",
  // Wajib untuk static export agar setiap halaman punya folder /index.html
  // sehingga URL bekerja tanpa server Node.
  trailingSlash: true,
  images: {
    // Static export tidak punya server untuk optimasi gambar on-the-fly.
    unoptimized: true,
  },
};

export default nextConfig;
