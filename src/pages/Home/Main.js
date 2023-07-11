import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../services/Requests';
import { MainImage, MainContainer, Image } from './Main.styles';

function Main() {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);

    console.log(movie);

    return (
        <MainContainer>
            <MainImage>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
            </MainImage>
            <div>
                <h1>{movie?.title}</h1>
                <div>
                    <button>
                        Play
                    </button>
                    <button>
                        Watch Later
                    </button>
                </div>
                <p>
                    Released: {movie?.release_date}
                </p>
                <p>
                    {movie?.overview}
                </p>
            </div>
        </MainContainer>

    )
}

export default Main