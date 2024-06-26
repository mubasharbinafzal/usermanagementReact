import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const UserTable = ({ users, onDelete, onEdit }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDeleteClick = (userId) => {
    setSelectedUserId(userId);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedUserId);
    setOpenDeleteDialog(false);
    setSelectedUserId(null);
  };

  const handleEditClick = (data) => {
    const obj =
    { 
      _id: data._id,
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      street: data.address.street,
      suite: data.address.suite,
      city: data.address.city,
      zipcode: data.address.zipcode,     
      lat: data.address.geo.lat,
      lng: data.address.geo.lng,
      phone: data.phone,
      website: data.website, 
      company_name: data.company.name,
      company_catchPhrase: data.company.catchPhrase,
      company_bs: data.company.bs
   }
    onEdit(obj); 
  };

  const handleCancelDelete = () => {
    setOpenDeleteDialog(false);
    setSelectedUserId(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(user)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(user._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserTable;
