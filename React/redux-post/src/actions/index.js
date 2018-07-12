import axios from 'axios';

export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY= '3737';

// Fetch Posts Action Creator
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}?key=${API_KEY}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callBack) {
  const request = axios.post(`${ROOT_URL}?key=${API_KEY}`, values)
    .then(() => callBack());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/${id}?key=${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callBack) {
  axios.delete(`${ROOT_URL}/${id}?key=${API_KEY}`)
    .then(() => callBack());
  return {
    type: DELETE_POST,
    payload: id
  }
}

export function loginUser() {
  // validate
}