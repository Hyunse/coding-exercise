import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    textAlign: 'center',
    marginTop: 15,
    '&:hover': {
      'cursor': 'pointer'
    }
  },
});

const MovieCard = ({ loading, movie }) => {
  const classes = useStyles();

  const card = () => {
    return (
      <Card variant="outlined" className={classes.root}>
        <CardContent>
          <Typography variant="h5">{movie.Title}</Typography>
          <Typography variant="subtitle1">{movie.Genre}</Typography>
          <Typography variant="subtitle1">{movie.Director}</Typography>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      {movie === ''
        ? 'Search Movie Title'
        : loading === false
        ? 'Loading.....'
        : card()}
    </>
  );
};

export default MovieCard;
