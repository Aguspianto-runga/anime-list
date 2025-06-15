import Link from "next/link";
import InputSearch from "./inputSearch";
const Navbar = () => {
    return (
        <header className="bg-[#ffc639]">
        <div className="flex flex-col justify-between md:items-center gap-2 p-4 md:flex-row">
            <Link href="/" className="text-2xl font-bold">ANIME LIST</Link>
            <InputSearch />
        </div>
        </header>
    );
    };

export default Navbar;
