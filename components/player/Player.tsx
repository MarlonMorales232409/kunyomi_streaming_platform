import ReactPlayer from "react-player/lazy";
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";


export const Player = () => {

    const [windowLoad, setWindowLoad] = useState(false)
    const [playPause, setPlayPause] = useState(false)
    const [volume, setVolume] = useState(0.5)
    const [muted, setMuted] = useState(false)
    const [progress, setProgress] = useState(0)

    const playerRef = useRef<ReactPlayer>(null)

    useEffect(() => {
        setWindowLoad(true)

        if (localStorage.getItem("ally-supports-cache")) {
            localStorage.clear()
        }
    }, [])


    const onPlayPause = () => {
        setPlayPause(playPause ? false : true)
    }

    const onUpVolume = () => {
        volume >= 1 ? setVolume(1) : setVolume(volume + 0.1)

    }

    const onDownVolume = () => {
        volume <= 0 ? setVolume(0) : setVolume(volume - 0.1)
    }

    const onMutedPlayer = () => {
        setMuted(muted ? false : true)
    }

    const onMoveTenSecodns = () => {
        playerRef.current?.seekTo(playerRef.current.getCurrentTime() + 10)
    }
    const onBackTenSecodns = () => {
        playerRef.current?.seekTo(playerRef.current.getCurrentTime() - 10)
    }

    return (
        <div className="video-container">
            {/* <iframe allowFullScreen width={"100%"} height="100%" loading="lazy" className="player" src="https://gogohd.net/streaming.php?id=MTkwODU2&title=Overlord+IV+Episode+8&typesub=SUB" title="Episode"></iframe> */}
            {/* <Button size="md" >
                <ArrowUturnLeftIcon width={"30px"} />
            </Button> */}

            {
                windowLoad &&
                <ReactPlayer
                    ref={playerRef}
                    playing={playPause}
                    volume={volume}
                    muted={muted}
                    url={"https://www06.gogocdn.stream/videos/hls/F6VUpGZoCh9E7UjGVUbU2A/1666667181/190856/ca09dc1ce88568467994ea8e756c4493/ep.8.1661269167.m3u8"} />
            }

            <Button onClick={onPlayPause}>{playPause ? "Pause" : "Play"}</Button>
            <Button onClick={onUpVolume}>+ Volume</Button>
            <Button onClick={onDownVolume}>- Volume</Button>
            <Button onClick={onMutedPlayer}>{muted ? "Unmuted" : "Muted"}</Button>
            <Button onClick={onMoveTenSecodns}>{">>>"}</Button>
            <Button onClick={onBackTenSecodns}>{"<<<"}</Button>
        </div>
    )
}
// 