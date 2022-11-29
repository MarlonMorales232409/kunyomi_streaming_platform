import ReactPlayer from "react-player/lazy";
import { useEffect, useRef, useState } from "react";
import { Controls } from "./";


export const Player = () => {

    const [windowLoad, setWindowLoad] = useState(false)

    const playerRef = useRef<ReactPlayer>(null)

    useEffect(() => {
        setWindowLoad(true)

        if (localStorage.getItem("ally-supports-cache")) {
            localStorage.clear()
        }
    }, [])


    return (
        <div className="video-container">

            {
                windowLoad && (
                    <>
                        {/* <Controls /> */}
                        <ReactPlayer
                            controls
                            width="100%"
                            height="100%"
                            url={"https://wwwx18.gogocdn.stream/videos/hls/SzDcMAcAUKHDZSXX82BogQ/1669404813/189057/ca09dc1ce88568467994ea8e756c4493/ep.2.1657688880.m3u8"}

                        />
                    </>
                )
            }

        </div>
    )
}
// 