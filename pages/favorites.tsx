import { NextPage } from 'next'
import React from 'react'
import { MainLayout } from '../components/layouts'

const FavoritesPage: NextPage = () => {
    return (
        <MainLayout title="Favorite Page" pageDescription='My Favorites Animes'>
            <h1>Favorite Page</h1>
        </MainLayout>
    )
}


export default FavoritesPage