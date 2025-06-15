import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-5 sm:grid-cols-3">
        {api.data?.map((anime, index) => (
            <Link href={`/anime/${anime.mal_id}`} key={index} className="text-[#eeeeee] hover:text-[#ffc639] transition-all overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105">
                <Image src={anime.images.webp.image_url}
                    alt={anime.title || "Anime Image"}
                    width={350}
                    height={350}
                    className="object-cover w-full max-h-90" />
                <h3 className="p-4 text-sm font-bold md:text-xl">{anime.title}</h3>
            </Link>
        ))}
        </div>
    );
};

export default AnimeList;
