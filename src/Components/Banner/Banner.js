import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY, ImageUrl} from '../../constants/Constants'
import axios from '../../axios'
function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            
            const results = response.data.results
            const newIndex = Math.floor(Math.random() * results.length)
            console.log(response.data.results[newIndex]);
            setMovie(response.data.results[newIndex])
        })
    }, [])
    return (
        <div className='banner' style={{backgroundImage: `url( ${Movie ? ImageUrl+Movie.backdrop_path : null})`}} >
      
            <div className="content">
                <h1 className="title">{Movie ? Movie.title : null}</h1>
                <h1 className="title">{Movie ? Movie.name : null}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{Movie ? Movie.overview : null}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
