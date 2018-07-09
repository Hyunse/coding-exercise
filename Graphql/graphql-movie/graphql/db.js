export let movies = [
  {
    id: 1,
    name: 'Star Wars',
    score: 99
  },
  {
    id: 2,
    name: 'Lion King',
    score: 89
  },
  {
    id: 3,
    name: 'Matrix',
    score: 100
  },
  {
    id: 4,
    name: 'Logan',
    score: 50
  }
];

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const deletedMovie = movies.filter((movie) => movie.id !== id);
  if(movies.length > deletedMovie.length) {
    movies = deletedMovie;
    return true;
  } else {
    return false;
  }
};

export const addNewMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}
