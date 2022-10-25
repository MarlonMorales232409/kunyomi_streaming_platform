import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Player } from '../../components/player'

const StreamingPlayerPage = () => {

    const router = useRouter()

    return (
        <div >

            <Player />
        </div>
    )
}

export default StreamingPlayerPage