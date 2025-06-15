import Link from "next/link";

// halaman ini untuk costum 404 not found, dimana sebenarnya next.js sudah ada not found defaultnya tinggal ganti nama file ini atau hapus saja 
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-2xl text-[#ffc639] gap-4">
            <span className="text-7xl font-extrabold animate-bounce">404</span>
            <span className="animate-fadein">Halaman Tidak Ditemukan</span>
            <Link href="/" className="mt-4 px-6 py-2 rounded bg-[#ffc639] text-[#222831] font-bold shadow hover:bg-[#eeeeee] transition-all">Kembali ke Beranda</Link>
            {/* <a href="/" className="mt-4 px-6 py-2 rounded bg-[#ffc639] text-[#222831] font-bold shadow hover:bg-[#ffe082] transition-all">Kembali ke Beranda</a> */}
        </div>
    );
}

export default NotFound;