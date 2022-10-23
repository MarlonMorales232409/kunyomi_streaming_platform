import ReactPlayer from "react-player"


export const Player = () => {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: -10 }}>
            {/* <video autoPlay controls src="https://wwwx17.gogocdn.stream/videos/hls/527uJ-6YA2NF1mi5_0kM-Q/1666500120/190856/ca09dc1ce88568467994ea8e756c4493/ep.8.1661270369.m3u8"></video> */}
            {/* <iframe className="video-player" src="https://gogohd.net/streaming.php?id=MTkwODU2&title=Overlord+IV+Episode+8&typesub=SUB" title="Episode"></iframe> */}

            <ReactPlayer
                url={"https://wwwx17.gogocdn.stream/videos/hls/527uJ-6YA2NF1mi5_0kM-Q/1666500120/190856/ca09dc1ce88568467994ea8e756c4493/ep.8.1661270369.m3u8"}
            />
        </div>
    )
}
