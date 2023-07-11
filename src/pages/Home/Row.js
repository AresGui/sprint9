import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledRow, BigContainer, ImageContainer, LeftArrow, RightArrow } from './Row.styles';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById(`slider-${title}`);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById(`slider-${title}`);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <BigContainer>
            <div>
                <h2>{title}</h2>
                <div>
                    <LeftArrow>
                        <MdChevronLeft size={40} onClick={slideLeft} />
                    </LeftArrow>
                    <StyledRow id={`slider-${title}`}>
                        {movies.map((movie) => (
                            <div key={movie.id}>
                                <ImageContainer src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
                                <div>
                                    <p>{movie?.title}</p>
                                </div>
                            </div>
                        ))}
                    </StyledRow>
                    <RightArrow>
                        <MdChevronRight size={40} onClick={slideRight} />
                    </RightArrow>
                </div>
            </div>
        </BigContainer>
    );
}

export default Row;
