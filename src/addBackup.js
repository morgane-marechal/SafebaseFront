import React from 'react';
import { Button } from '@mui/joy'; 
import Add from '@mui/icons-material/Add';

export default function AddBackup() {
  const buttonStyles = {
    color: 'black',
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
        '&:hover': hoverStyles, 
      }}
    >Backup</Button>
  );
}
