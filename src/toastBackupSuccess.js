import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ToastSuccess({ open, handleClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={2000}  // Délai avant que le toast disparaisse automatiquement
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '120%' }}>
        Backup réussi!
      </Alert>
    </Snackbar>
  );
}
