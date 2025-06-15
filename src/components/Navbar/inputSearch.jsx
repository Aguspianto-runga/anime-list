"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (even) => {
        const keyword = searchRef.current.value;
        if (!keyword) return;
        if (even.key === "Enter" || even.type === "click") {
            even.preventDefault();
            router.push(`/search/${keyword}`)
        }
    }

    return (
    <div className="relative">
            <input placeholder="Cari anime..." 
            className="w-full p-2 bg-white rounded"
            ref={searchRef}
            onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-1" onClick={handleSearch}>
                <MagnifyingGlassIcon size={24} />
            </button>
    </div>
    )
}

export default InputSearch;