import React from 'react';

const Home = ({ loading, movie }) => {
  const moiveCard = () => {
    return (
      <div>
        <div>{movie.Title}</div>
        <div>{movie.Genre}</div>
        <div>{movie.Director}</div>
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </div>
    );
  };

  return (
    <>
      {movie === ''
        ? 'Search Movie Title'
        : loading === false
        ? 'Loading.....'
        : moiveCard()}
    </>
  );
};

export default Home;
