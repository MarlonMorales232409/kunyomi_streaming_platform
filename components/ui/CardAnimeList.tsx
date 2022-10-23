import { FC } from "react"
import { Grid } from "@nextui-org/react";
import { RecentEpisode, PopularAnime, MoviesAnime } from '../../interfaces';
import { CardAnime } from "./"; import { animeMovies } from '../../database/moviesAnime';


interface Props {
    animes: RecentEpisode[] | PopularAnime[] | MoviesAnime[]
}

export const CardAnimeList: FC<Props> = ({ animes }) => {


    return (
        <Grid.Container gap={2} wrap="nowrap" css={{ overflowX: "scroll", width: "100vw" }}>
            {
                animes.map(anime => (
                    <>
                        <CardAnime anime={anime} key={anime.animeId} />
                        <div className="listShadow" />
                    </>
                ))
            }

        </Grid.Container>
    )
}
