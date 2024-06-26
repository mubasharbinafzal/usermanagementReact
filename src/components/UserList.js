// components/UserList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser, searchUsers } from '../store/actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error, filteredUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleSearch = (e) => {
    dispatch(searchUsers(e.target.value));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const userList = filteredUsers.length > 0 ? filteredUsers : users;

  return (
    <div>
      <h2>User List</h2>
      <input type="text" placeholder="Search Users" onChange={handleSearch} />
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <div>Name: {user.name}</div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
