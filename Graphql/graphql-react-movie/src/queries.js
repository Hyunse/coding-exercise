import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  query {
    movies(limit: 20, rating: 9) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      title
      genres
      rating
      medium_cover_image
      description_intro
      language
    }
    suggestions(id: $movieId) {
      id
      title
      medium_cover_image
      rating
    }
  }
`;