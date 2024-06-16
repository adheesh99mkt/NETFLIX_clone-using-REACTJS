import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl} from '../../constants/constants'


function Rowpost(props) {
  const [movies,setMovies]=useState([])
  const [urlid,setUrlid]=useState('')
  const [flag,setFlag]=useState(false)
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response);
      setMovies(response.data.results)
    }).catch(err=>{
      
      //alert("Network error")
    })
  },[])
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      setUrlid(response.data.results[0])
    })

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
        <div className='posters'>
            {
              movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />
            )}
            
            
        </div>
       {urlid && <YouTube opts={opts} videoId={urlid.key}></YouTube> }
    </div>
  )
}

export default Rowpost
