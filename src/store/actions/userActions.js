// actions/userActions.js
import axios from 'axios';
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
} from './actionTypes';
import { API_BASE_URL } from '../../global/constants';
const apiUrl = API_BASE_URL+"users"; 

// Fetch users
export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

// Add user
export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, user);
    dispatch({ type: ADD_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_USER_FAILURE, payload: error.message });
  }
};

// Update user
export const updateUser = (user) => async (dispatch) => {
  try {
    const response = await axios.put(`${apiUrl}/${user._id}`, user);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
  }
};

// Delete user
export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/${userId}`);
   return dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
  }
};

// Search users
export const searchUsers = (searchTerm) => ({
  type: SEARCH_USERS,
  payload: searchTerm
});
