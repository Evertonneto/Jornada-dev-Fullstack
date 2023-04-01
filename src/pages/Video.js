import React,{ useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSideBar from "./components/sidebar/VideoSideBar";

import './Video.css'

function Video({likes,messages,shares,name,description,music,url}) {

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
        src={url}
          loop
        >

        </video>
        
        
        <VideoSideBar
            likes={likes}
            messages={messages}
            shares={shares}
        />
        
        <VideoFooter 
            name={name}
            description={description}
            music={music}
        />
        
        </div>
    )
}

export default Video;