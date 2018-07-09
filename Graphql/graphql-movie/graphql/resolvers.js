import { movies, getById, deleteMovie, addNewMovie } from './db';

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, {name, score}) => addNewMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
