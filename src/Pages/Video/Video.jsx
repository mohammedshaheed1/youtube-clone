import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommented from '../../Components/Recommented/Recommented'
import { useParams } from 'react-router-dom'


function Video() {
  
  const {categoryID,videoID}=useParams()
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoID}/>
      <Recommented categoryID={categoryID}/>
    </div>
  )
}

export default Video