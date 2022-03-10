// Code MovieReviews Here
import React, {Component} from 'react';

const MovieReviews = ({movies}) => (
    <div className="review-list">
        {movies.map((movie) => (
            <Movie title={movie.title} className="review" />
        ))}
    </div>
)

export default MovieReviews;