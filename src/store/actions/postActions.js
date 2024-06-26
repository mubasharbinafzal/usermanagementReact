// actions/postActions.js
import axios from 'axios';
import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  FETCH_UNIQUE_USER_POSTS_SUCCESS,
  FETCH_UNIQUE_USER_POSTS_FAILURE,
  SEARCH_POSTS
} from './actionTypes'; 

import { API_BASE_URL } from '../../global/constants';
const apiUrl = API_BASE_URL+"posts"; 

// Fetch posts
export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};

// Add post
export const addPost = (post) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, post);
    dispatch({ type: ADD_POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_POST_FAILURE, payload: error.message });
  }
};

// Update post
export const updatePost = (post) => async (dispatch) => {
  try {
    const response = await axios.put(`${apiUrl}/${post.id}`, post);
    dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_POST_FAILURE, payload: error.message });
  }
};

// Delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/${postId}`);
    dispatch({ type: DELETE_POST_SUCCESS, payload: postId });
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILURE, payload: error.message });
  }
};

// Fetch unique user posts
export const fetchUniqueUserPosts = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}?userId=${userId}`);
    dispatch({ type: FETCH_UNIQUE_USER_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_UNIQUE_USER_POSTS_FAILURE, payload: error.message });
  }
};

// Search posts
export const searchPosts = (searchTerm) => ({
  type: SEARCH_POSTS,
  payload: searchTerm
});
