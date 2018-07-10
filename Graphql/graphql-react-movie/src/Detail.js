import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';
import Movie from './Movie';
import './Detail.css';

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId }}>
      {({ loading, data: { movie, suggestions }, error }) => {
        if (loading) return 'loading...';
        if (error) return 'error';
        return (
          <React.Fragment>
            <div className="movie-detail-box">
              <figure className="movie-figure">
                <img src={movie.medium_cover_image} alt={movie.title} />
              </figure>
              <span className="movie-description">
                <h3>{movie.title}</h3>
                {movie.description_intro}
              </span>
            </div>
            <div className="movie-container">
              {suggestions.map((suggestion) => {
                return (
                  <Movie
                    id={suggestion.id}
                    title={suggestion.title}
                    img={suggestion.medium_cover_image}
                    key={suggestion.id}
                  />
                );
              })}
            </div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default Detail;
