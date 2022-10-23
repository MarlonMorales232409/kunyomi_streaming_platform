import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Player } from '../../components/player'

const StreamingPlayerPage = () => {

    const router = useRouter()

    return (
        <div className='video-player-container'>
            <Link href={"/"} passHref style={{ position: "absolute", top: 20, left: 20, zIndex: 20 }}>
                <a>Go Back</a>
            </Link>
            <Player />
        </div>
    )
}

export default StreamingPlayerPage