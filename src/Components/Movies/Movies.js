import React,{useEffect, useState} from 'react'
import { ImageUrl} from '../../constants/Constants'
import axios from '../../axios'
import './Movies.css'
import Navbar from '../NavBar/Navbar'
function Movies(props) {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setmovies(response.data.results) 
        })
    }, [props.url])
    return (
        <div className='rows'>
            <Navbar/>
            <h2>{props.title}</h2>
            <div className="posters">
            {
                    movies.map((obj) => 

                        <img className={ props.isSmall ? 'small-poster' : 'poster'} src={`${movies ? ImageUrl+obj.backdrop_path : null}`} alt="" />
                    )
                }
            </div>
        </div>
    )
}

export default Movies
