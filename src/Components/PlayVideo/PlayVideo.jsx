import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import save from '../../assets/save.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY,value_converter } from '../../data'
import moment from 'moment'
import { data } from 'react-router-dom'


const PlayVideo = ({ videoId }) => {

   const [apiData,setApiData]=useState([]);
   const [channelData,setChannelData]=useState([])
   console.log(channelData)

   const fetchData=async()=>{
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
        .then((response) => response.json())
        .then((data) => {
            setApiData(data.items[0]);
        })
   }

   const fetchotherdata=async()=>{
      const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`
      await fetch(channelData_url).then((response)=>response.json()).then((data)=>{setChannelData(data.items[0])})
   }

   useEffect(()=>{
       fetchData()
   },[videoId])

   useEffect(()=>{
      fetchotherdata()
   },[apiData])


  return (
    <div className='play-video'>
      
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

     <h3>{apiData?.snippet?.title || 'title here'}</h3>

      <div className="play-video-info">
        <p>{value_converter(apiData?.statistics?.viewCount)} views &bull; {moment(apiData?.snippet?.publishedAt).fromNow()} </p>
        <div>
          <span><img src={like} alt="" />{value_converter(apiData?.statistics?.likeCount)}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>

        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.default?.url} alt="" />
        <div>
          <p>{apiData?.snippet?.channelTitle}</p>
          <span>{value_converter(channelData?.statistics?.subscriberCount)} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-discription">
        <p>{apiData?.snippet?.description.slice(0,250)}</p>
        <hr />
        <h4>{value_converter(apiData?.statistics?.commentCount)} comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nickolson <span>1 day ago</span></h3>
            <p>The internet is considered to have begun on January 1, 1983, when the Advanced Research Projects Agency Network (ARPANET) adopted the Transfer Control Protocol/Internetwork Protocol (TCP/IP):</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nickolson <span>1 day ago</span></h3>
            <p>The internet is considered to have begun on January 1, 1983, when the Advanced Research Projects Agency Network (ARPANET) adopted the Transfer Control Protocol/Internetwork Protocol (TCP/IP):</p>
            <div className="comment-section">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nickolson <span>1 day ago</span></h3>
            <p>The internet is considered to have begun on January 1, 1983, when the Advanced Research Projects Agency Network (ARPANET) adopted the Transfer Control Protocol/Internetwork Protocol (TCP/IP):</p>
            <div className="comment-section">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nickolson <span>1 day ago</span></h3>
            <p>The internet is considered to have begun on January 1, 1983, when the Advanced Research Projects Agency Network (ARPANET) adopted the Transfer Control Protocol/Internetwork Protocol (TCP/IP):</p>
            <div className="comment-section">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PlayVideo
