import React from 'react';
import { Button } from '@mui/joy'; // Ou '@mui/material' si vous utilisez Material-UI
import Add from '@mui/icons-material/Add';

export default function AddBackup() {
  const buttonStyles = {
    // backgroundColor: '#1976d2',
    color: 'black',
    // padding: '10px 20px',
    // borderRadius: '5px',
    // fontSize: '16px',
    // display: 'flex',
    // alignItems: 'center',
    cursor: 'pointer',
  };

  const hoverStyles = {
    backgroundColor: '#1565c0',
  };

  return (
    <Button
      className="btnBk"
      variant="outlined"
      startDecorator={<Add />}
      sx={{
        ...buttonStyles,
        '&:hover': hoverStyles, // Appliquer le style au survol
      }}
    >Backup</Button>
  );
}
