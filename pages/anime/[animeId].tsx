import { FC } from 'react'
import { useRouter } from 'next/router'
import NextLink from "next/link"
import { Card, Container, Divider, Grid, Text, Link } from '@nextui-org/react'
import { MainLayout } from '../../components/layouts'
import { AnimeDetails } from '../../database/AnimeDetails';



const AnimePage: FC = () => {

  const router = useRouter()

  console.log(router.query)

  return (
    <MainLayout title={'Details'} pageDescription={'Details of anime'}>
      <Grid.Container gap={2} justify="center" css={{ my: 15 }}>

        <Grid xs={12} md={5} justify="center" css={{ "@md": { flex: "0 !important" } }}>
          <Card
            css={{ p: 0, m: 0, "@xs": { w: "100%" }, "@md": { w: 400 } }}
            variant="bordered"
          >

            <Card.Body>
              <Card.Image
                src={AnimeDetails.animeImg}
                objectFit="fill"
                width={"100%"}
                alt="Card image background"
                css={{ borderRadius: 10 }}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} md={7} justify="flex-start">
          <Card
            css={{ p: 0, m: 0, "@xs": { w: "100%" } }}
            variant="bordered"
          >
            <Card.Header css={{ alignItems: "center" }}>
              <Container fluid>
                <Text size={30} h1>Title: {AnimeDetails.animeTitle}</Text>
                <Divider />
                <Text size={24} h2>Other Name: {AnimeDetails.otherNames}</Text>
              </Container>
            </Card.Header>
            <Divider />
            <Card.Body>
              <Text size={21} b>Genres:</Text>
              <Grid.Container gap={2}>
                {
                  AnimeDetails.genres.map(genre => (
                    <Grid xs={3} md={2} key={genre}>
                      <Card
                        variant="bordered"
                        css={{
                          h: 40,
                          w: 120,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Body >
                          <Text size={14} b>{genre}</Text>
                        </Card.Body>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid.Container>
              <Divider />
              <Container fluid>
                <Text size={19} h3>Released Date: {AnimeDetails.type}</Text>
                <Text size={19} h3>Status: {AnimeDetails.status}</Text>
                <Text size={19} h3>Total Episodes: {AnimeDetails.totalEpisodes}</Text>
              </Container>
              <Divider />
              <Container fluid css={{ pt: 5 }}>
                <Text size={17} b>Synopsis:</Text>
                <Text size={14} >{AnimeDetails.synopsis}</Text>

              </Container>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
          </Card>

        </Grid>
        <Divider css={{ my: 20 }} />
        <Container fluid>
          <Text h3 size={20}> Episodes List:</Text>
          <Grid.Container gap={2}>
            {
              AnimeDetails.episodesList.map(episode => (
                <Grid xs={4} md={2} key={episode.episodeNum}>
                  <NextLink href={`/streaming/${episode.episodeId}`} passHref>
                    <Link>
                      <Card
                        variant="bordered"
                        isHoverable
                        isPressable

                        css={{
                          h: 40,
                          w: 120,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Body >
                          <Text size={13} b>Episode - {episode.episodeNum}</Text>
                        </Card.Body>
                      </Card>

                    </Link>
                  </NextLink>
                </Grid>
              ))
            }
          </Grid.Container>

        </Container>

      </Grid.Container>
    </MainLayout >
  )
}

export default AnimePage