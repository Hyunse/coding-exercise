import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@material-ui/core';
import axios from 'axios';
import MovieCard from './MovieCard';

const useSearch = (title) => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (title) {
          setLoading(false);
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${title}`
          );
          const data = await response.data;
          setLoading(true);

          setMovie(data);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchData();
  }, [title]);

  return { loading, movie };
};

function MovieSearch() {
  const [title, setTitle] = useState();
  const { loading, movie } = useSearch(title);

  const inputKeyUp = (e) => {
    const {
      target: { value },
      keyCode,
    } = e;

    if (keyCode === 13) setTitle(value);
  };

  return (
    <div className="App">
      <TextField label="Search" onKeyUp={inputKeyUp} variant="outlined" />
      <Box display="flex" alignItems="center" flexDirection="column">
        <MovieCard movie={movie} loading={loading} />
      </Box>
    </div>
  );
}

export default MovieSearch;
