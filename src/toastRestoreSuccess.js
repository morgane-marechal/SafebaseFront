import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ToastRestore({ open, handleClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={1000}  
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" 
      sx={{ width: '200%',
          fontSize: '1.2rem',
          padding: '1rem' }}>
        Restauration réussi!
      </Alert>
    </Snackbar>
  );
}
