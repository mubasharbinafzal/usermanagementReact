import React, { useState , useEffect} from 'react';
import UserForm from './UserForm';  // Adjust path if necessary
import UserTable from './UserTable';  // Adjust path if necessary
import { Box, Typography, Grid , TextField} from '@material-ui/core';  
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers,addUser, deleteUser,updateUser, searchUsers } from '../../store/actions/userActions';
import CustomSnackbar from '../CustomSnackbar'; // Adjust path if necessary



const App = () => {
    // const [users, setUsers] = useState(initialUsers);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [editingUser, setEditingUser] = useState(null); 
    const dispatch = useDispatch();
    const { users, loading, error, filteredUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [dispatch]); 

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    setShowSnackbar(true);
    setSnackbarMessage('User deleted successfully!');
    setSnackbarSeverity('success');
  };

  const handleSearch = (e) => {
    dispatch(searchUsers(e.target.value));
  };
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const userList = filteredUsers.length > 0 ? filteredUsers : users;
  
  const handleAddUser = (values) => { 
    const newUser = {
      id: users.length + 1,
      ...values,
    };
    dispatch(addUser(newUser)); 
    setShowSnackbar(true);
    setSnackbarMessage('User added successfully!');
    setSnackbarSeverity('success');   
    };

  const handleEditUser = (user) => { 
    dispatch(updateUser(user));
    setShowSnackbar(true);
    setSnackbarMessage('User Updated successfully!');
    setSnackbarSeverity('success'); 
  };
  const handleEditCancel = () => {
    setEditingUser(null);
  };

  return (
    <Box m={5}>
        <CustomSnackbar
          open={showSnackbar}
          message={snackbarMessage}
          severity={snackbarSeverity}
          onClose={handleCloseSnackbar}
      />
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {editingUser ? 'Edit User' : 'Add User'}
          </Typography>
          <UserForm onSubmit={editingUser ? handleEditUser : handleAddUser} defaultValues={editingUser ? editingUser : {} } />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            User List
          </Typography>
          <TextField type="text" label="Search Users" variant="outlined"  onChange={handleSearch}/> 
          <UserTable users={userList} onDelete={handleDeleteUser} onEdit={setEditingUser} />
        </Grid>
      </Grid>

     
    </Box>
  );
};

export default App;
