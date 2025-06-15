import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-[#eeeeee] text-2xl font-bold mb-2">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="flex gap-2 px-4 pt-4 text-[#e4e4ed] overflow-auto">
        <div className="flex flex-col items-center justify-center border rounded w-36 border-[#eeeeee] p-2">
          <div>Peringkat</div>
          <p>{anime.data.rank}</p>
        </div>
        <div className="flex flex-col items-center justify-center border rounded w-36 border-[#eeeeee] p-2">
          <div>Skor</div>
          <p>{anime.data.score}</p>
        </div>
        <div className="flex flex-col items-center justify-center border rounded w-36 border-[#eeeeee] p-2">
          <div>Anggota</div>
          <p>{anime.data.members}</p>
        </div>
        <div className="flex flex-col items-center justify-center border rounded w-36 border-[#eeeeee] p-2">
          <div>Episode</div>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap items-center gap-2 px-4 pt-4 text-[#e4e4ed]">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={300} className="object-cover w-full rounded" />
        <p className="text-xl text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        {console.log("YouTube ID:", anime.data.trailer.youtube_id)}
      </div>
    </>
  );
};

export default Page;
