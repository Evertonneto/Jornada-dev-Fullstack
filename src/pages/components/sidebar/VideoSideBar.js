import React,{useState} from 'react'
import './VideoSideBar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import { Send } from '@mui/icons-material';

function VideoSideBar({likes,messages,shares}){

    const [liked, setLiked] = useState(false)

    function handdleLike(){
        setLiked(!liked)
    }


    return(
        <div className='VideoSideBar'>
            <div className='videoSideBar__options'
            onClick={handdleLike}>
                { liked ? <FavoriteIcon fontSize='large' />: <FavoriteBorderIcon fontSize='large' /> }
                
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSideBar__options'>
                <ChatIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='videoSideBar__options'>
                <SendIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>

    )
}

export default VideoSideBar