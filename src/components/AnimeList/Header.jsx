import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold text-[#eeeeee]">{title}</h1>
            {linkHref && linkTitle ?
                <Link href={linkHref} className="text-sm underline transition md:text-xl hover:text-[#ffc639] text-[#eeeeee] text-transition-all">
                    {linkTitle}
                </Link>
            :null
            }
        </div>
    );
}

export default Header;