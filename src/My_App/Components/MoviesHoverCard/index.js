import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { fetchMovieDetailsRequest } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { genreMap } from '../../../Genre';
import iso6391 from 'iso-639-1';
import "./style.css"


function MoviesHoverCard({ index, movie, height, width }) {

    const [hoverIndex, setHoverIndex] = useState(null);

    let movieData = {
        ...movie,
        poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        backdrop_path: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
        original_language: iso6391.getName(movie.original_language)
    }


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/moviedetail")
    }

    return (
        <div
            className="movie_div"
            key={index}
            style={{ cursor: "pointer", position: "relative", }}
            onMouseOver={() => setHoverIndex(index)}
            onMouseOut={() => setHoverIndex(null)}
            onClick={() => {
                dispatch(fetchMovieDetailsRequest(movie.id))
                handleNavigation()
            }}
        >
            <img
                src={movieData.poster_path}
                style={{
                    width: width ? width : "200px",
                    height: height ? height : "300px",
                    borderRadius: "10px",
                }}
            />
            {!width &&
                hoverIndex === index && (
                    <>
                        <div style={{ position: "absolute", top: 0, left: 20, color: "whitesmoke", }}>
                            <h3>
                                {movie.title}
                            </h3>
                            {movie.genre_ids.map((genre, index) => {
                                return (
                                    <p key={index}>{genre}</p>
                                )
                            })}
                        </div>
                        <div style={{ position: "absolute", top: 40, right: 30 }}>
                            <FaStar style={{ textAlign: "center", marginLeft: "14px", marginTop: "30px", color: "yellowgreen" }} size={25} />
                            <h3 style={{ color: "white" }}>{movie.vote_average} / 10</h3>
                        </div>
                    </>
                )}
        </div>
    )
}

export default MoviesHoverCard