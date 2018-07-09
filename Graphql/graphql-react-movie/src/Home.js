import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import Movie from './Movie';
import './Home.css';

const Home = () => (
  <div className="wrap">
    <div className="movie-container">
      <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
          if (loading) return 'loading...';
          if (error) return 'error';
          return data.movies.map((movie) => {
            return (
              <Movie
                id={movie.id}
                title={movie.title}
                img={movie.medium_cover_image}
                key={movie.id}
              />
            );
          });
        }}
      </Query>
    </div>
  </div>
);

export default Home;
