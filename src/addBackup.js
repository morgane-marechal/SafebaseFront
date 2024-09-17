import React, { useState } from 'react';
import { Button } from '@mui/joy'; 
import Add from '@mui/icons-material/Add';
import ToastSuccess from './toastBackupSuccess';

export default function AddBackup({ databaseId }) {
  const [showToast, setShowToast] = useState(false); 

  const postDatabaseInfo = async (databaseInfo) => {
    try {
      const response = await fetch(`http://localhost:3001/api/systeme/dump/${databaseId}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
        setShowToast(true); 
      } else {
        console.error('Server error:', response.statusText);  
      }
    } catch (error) {
      console.error('Error during form submission:', error);  
    }
  };

  const addBackup = async (event) => {
    postDatabaseInfo(databaseId);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={addBackup}
        startDecorator={<Add />}
      >
        Backup
      </Button>

      <ToastSuccess open={showToast} handleClose={() => setShowToast(false)} />
    </React.Fragment>
  );
}
