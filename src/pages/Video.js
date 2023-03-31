import userEvent from "@testing-library/user-event";
import React,{ useRef, useState } from "react";
import VideoFooter from "./components/footer/videofooter";
import './Video.css'

function Video() {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart(){

        if(play){
            videoRef.current.pause()
            setPlay(false)
        }else{
            videoRef.current.play()
            setPlay(true)
        }

    }

    return (
        <div className="video"> 
        
        <video 
        ref={videoRef}
        onClick={handleStart}
        className="video__player"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
          loop
        >

        </video>
        {/* Side Bar*/}
        <VideoFooter />
        {/* Footer */}
        
        </div>
    )
}

export default Video;