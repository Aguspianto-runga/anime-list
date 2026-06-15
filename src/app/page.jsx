import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recomendedAnime = reproduce(recomendedAnime, 5);
  
  return (
    <> 
      {/* Anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime Rekomendasi*/}
      <section className="mt-3 mb-3">
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  ); 
};

export default Page;