// reducers/usersReducer.js
import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    SEARCH_USERS
  } from '../actions/actionTypes';
  
  const initialState = {
    users: [],
    loading: false,
    error: null,
    filteredUsers: []
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return { ...state, users: action.payload, loading: false, error: null };
      case FETCH_USERS_FAILURE:
        return { ...state, users: [], loading: false, error: action.payload };
      case ADD_USER_SUCCESS:
        return { ...state, users: [...state.users, action.payload] };
      case ADD_USER_FAILURE:
        return { ...state, error: action.payload };
      case UPDATE_USER_SUCCESS:
        const updatedUsers = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
        return { ...state, users: updatedUsers };
      case UPDATE_USER_FAILURE:
        return { ...state, error: action.payload };
      case DELETE_USER_SUCCESS:
        const filteredUsers = state.users.filter((user) => user._id !== action.payload);
        return { ...state, users: filteredUsers };
      case DELETE_USER_FAILURE:
        return { ...state, error: action.payload };
      case SEARCH_USERS:
        const searchTerm = action.payload.toLowerCase();
        const filteredUsersList = state.users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.username.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
        );
        return { ...state, filteredUsers: filteredUsersList };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  