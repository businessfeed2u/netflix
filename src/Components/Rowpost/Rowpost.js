import React,{useEffect, useState} from 'react'
import './Rowpost.css'
import { ImageUrl} from '../../constants/Constants'
import axios from '../../axios'
function Rowpost(props) {
    const [Movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        })
    }, [props.url])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    Movies.map((obj) => 

                        <img className={ props.isSmall ? 'small-poster' : 'poster'} src={`${Movies ? ImageUrl+obj.backdrop_path : null}`} alt="" />
                    )
                }
                
            </div>
        </div>
    )
}

export default Rowpost
