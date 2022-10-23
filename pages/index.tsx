import { Button, Divider, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import { MainLayout } from '../components/layouts'
import { CardAnimeList } from '../components/ui'
import { recentEpisodes, popularAnimes, animeMovies } from '../database'


const HomePage: NextPage = () => {


  return (
    <MainLayout title={'Kunyomi'} pageDescription={'Chose your favorites animes for tonight and do not stop to enjoy'} >

      {/* Recent Episodes */}
      <Text h2 css={{ marginLeft: "30px", mt: "30px" }}>{`${"Don't miss the latest episodes"}`}</Text>
      <Divider />
      <CardAnimeList animes={recentEpisodes} />

      {/* Popular Animes */}
      <Text h3 css={{ marginLeft: "30px", mt: "30px" }}>Check out this popular animes</Text>
      <Divider />
      <CardAnimeList animes={popularAnimes} />
      <Divider />


      {/* Anime Movies */}
      <Text h3 css={{ marginLeft: "30px", mt: "30px" }}>Want to watch a movie? Check out these options</Text>
      <Divider />
      <CardAnimeList animes={animeMovies} />
      <Divider />

    </MainLayout>
  )
}

export default HomePage
