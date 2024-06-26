// reducers/postsReducer.js
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
  } from '../actions/actionTypes';
  
  const initialState = {
    posts: [],
    loading: false,
    error: null,
    filteredPosts: []
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_SUCCESS:
        return { ...state, posts: action.payload, loading: false, error: null };
      case FETCH_POSTS_FAILURE:
        return { ...state, posts: [], loading: false, error: action.payload };
      case ADD_POST_SUCCESS:
        return { ...state, posts: [...state.posts, action.payload] };
      case ADD_POST_FAILURE:
        return { ...state, error: action.payload };
      case UPDATE_POST_SUCCESS:
        const updatedPosts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
        return { ...state, posts: updatedPosts };
      case UPDATE_POST_FAILURE:
        return { ...state, error: action.payload };
      case DELETE_POST_SUCCESS:
        const filteredPosts = state.posts.filter((post) => post.id !== action.payload);
        return { ...state, posts: filteredPosts };
      case DELETE_POST_FAILURE:
        return { ...state, error: action.payload };
      case FETCH_UNIQUE_USER_POSTS_SUCCESS:
        return { ...state, posts: action.payload, loading: false, error: null };
      case FETCH_UNIQUE_USER_POSTS_FAILURE:
        return { ...state, posts: [], loading: false, error: action.payload };
      case SEARCH_POSTS:
        const searchTerm = action.payload.toLowerCase();
        const filteredPostsList = state.posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.body.toLowerCase().includes(searchTerm)
        );
        return { ...state, filteredPosts: filteredPostsList };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  