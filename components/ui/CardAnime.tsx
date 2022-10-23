import { FC } from 'react'
import { Grid, Card, Text } from '@nextui-org/react'
import { EyeIcon, HeartIcon } from '@heroicons/react/24/outline'
import { RecentEpisode, PopularAnime, MoviesAnime } from '../../interfaces'
import { useRouter } from 'next/router'




interface Props {
    anime: RecentEpisode | PopularAnime | MoviesAnime
}

export const CardAnime: FC<Props> = ({ anime }) => {

    const router = useRouter()

    const goToDetails = () => {
        router.push(`/anime/${anime.animeId}`)
    }

    return (
        <Grid >
            <Card
                variant="bordered"
                isHoverable
                isPressable
                onClick={goToDetails}
                css={{
                    mw: "330px",
                    w: "250px",
                    h: 420,
                    cursor: "pointer"
                }}
            >

                <Card.Body css={{ p: 6, }}>
                    <Card.Image
                        src={anime.animeImg}
                        objectFit="fill"
                        width={"100%"}
                        alt="Card image background"
                        css={{ borderRadius: 10 }}
                    />
                </Card.Body>

                <Card.Footer css={{ w: "100%" }}>
                    <Text color="white" css={{ m: "0", p: "0", textAlign: "center" }}>
                        {`${anime.animeTitle.slice(0, 22)}...${anime.animeTitle.slice(23, 27)}`}
                    </Text>
                </Card.Footer>

                <Card.Divider />

                <Card.Footer css={{ justifyContent: "space-between", p: "14px" }}>
                    <EyeIcon width={25} />
                    <HeartIcon width={25} />
                </Card.Footer>

            </Card>
        </Grid>
    )
}
