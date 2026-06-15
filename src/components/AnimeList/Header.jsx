// Import Link component dari Next.js untuk navigasi client-side
import Link from "next/link";

// Komponen Header menerima 3 props opsional: title, linkHref, dan linkTitle
const Header = ({ title, linkHref, linkTitle }) => (
  // Container utama dengan layout flexbox: sejajar & rapat kiri-kanan
  <div className="flex items-center justify-between p-4">
    {/* Judul halaman dengan ukuran 2xl dan warna abu-abu muda */}
    <h1 className="text-2xl font-bold text-[#eeeeee]">{title}</h1>
    
    {/* Render link hanya jika kedua props linkHref & linkTitle tersedia */}
    {linkHref && linkTitle && (
      <Link
        href={linkHref}
        className="text-sm underline transition md:text-xl hover:text-[#ffc639] text-[#eeeeee]"
      >
        {linkTitle}
      </Link>
    )}
  </div>
);

export default Header;