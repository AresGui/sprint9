import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);

    return (
        <>
            <h2>{title}</h2>
            <div>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
                        <div>
                            <p>{movie?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Row