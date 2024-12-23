import React, { useEffect, useState } from 'react'
import thumbline1 from '../../assets/thumbnail1.png'
import thumbline2 from '../../assets/thumbnail2.png'
import thumbline3 from '../../assets/thumbnail3.png'
import thumbline4 from '../../assets/thumbnail4.png'
import thumbline5 from '../../assets/thumbnail5.png'
import thumbline6 from '../../assets/thumbnail6.png'
import thumbline7 from '../../assets/thumbnail7.png'
import thumbline8 from '../../assets/thumbnail8.png'
import './Recommented.css'
import { API_KEY } from '../../data'

function Recommented({categoryID}) {

    const [apiData,setApiData]=useState([])
   
    const fetchData=async()=>{
        const recommented_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&${categoryID}&key=${API_KEY}`
        await fetch(recommented_url).then((response)=>response.json()).then((data)=>setApiData(data.items))
    }

    useEffect(()=>{
        fetchData()
    },[])



  return (
    <div className='recommented'>

        {apiData.map((item,index)=>{
            return(  <div className="side-video-list" key={index}>
             <img src={apiData?.thumbnails?.medium?.url} alt="" />
             <div className="video-info">
                 <h4>Best channel that help you to be a web developer</h4>
                 <p>GreatStack</p>
                 <p>199k views</p>
 
             </div>
         </div>)
        })}
        
        
    </div>
  )
}

export default Recommented