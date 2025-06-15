"use client"

import React, { useState } from "react"
import { XCircleIcon } from "@phosphor-icons/react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    const options = {
        width: "100%",
        height: "100%",
    }

    const Player = () => {
        
        
        return (
            <div className="fixed right-2 bottom-2">
            <button onClick={handleCloseButton} className="float-right bg-[#ffc639] text-[#222222] px-3 mb-1 rounded-lg shadow-lg hover:bg-[#e4e4ed]">
                <b>X</b>
            </button>
            <YouTube
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={options}
                />
        </div>
    )
}

    const ButtonOpenTrailer = () => {
        return (
            <button onClick={handleCloseButton} className="fixed w-32 h-10 bottom-5 right-5 bg-[#e4e4ed] text-[#48494b] rounded-lg shadow-lg shadow-[#000000] hover:text[#e4e4ed] hover:bg-[#ffc639] hover:shadow-[#222222]">
                <b>Trailer</b>
            </button>
        )
    }

return isOpen ? <Player /> : <ButtonOpenTrailer />

}

export default VideoPlayer