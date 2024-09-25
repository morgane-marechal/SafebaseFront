import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ToastSuccess({ open, handleClose, message }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={1000}  // Délai avant que le toast disparaisse automatiquement
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" 
      sx={{ width: '200%',
          fontSize: '1.2rem',
          padding: '1rem' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
