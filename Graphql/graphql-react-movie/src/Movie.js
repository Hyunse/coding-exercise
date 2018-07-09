import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ id, title, img }) => {
  return (
    <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: 'black'}}>
      <figure className="movie-figure">
        <img src={img} alt={title} />
        <figcaption className="movie-figcaption">{title}</figcaption>
      </figure>
    </Link>
  );
};

export default Movie;
