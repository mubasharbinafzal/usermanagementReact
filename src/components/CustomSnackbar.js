import React from 'react';
import { Snackbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';

const CustomSnackbar = ({ open, message, severity, autoHideDuration, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

CustomSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  autoHideDuration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

CustomSnackbar.defaultProps = {
  severity: 'info',
  autoHideDuration: 3000,
};

export default CustomSnackbar;
