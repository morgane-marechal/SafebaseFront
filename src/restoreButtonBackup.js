import React, { useEffect, useState } from 'react';
import { Button } from '@mui/joy'; 
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import ToastRestore from './toastRestoreSuccess';

export default function RestorButtonBackup({restoreId}) {
    const [error, setError] = useState(null);
    const [showToast, setShowToast] = useState(false); 


    const restoreBackup = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/systeme/restauration/${restoreId}`,
            );
            if (!response.ok) {
            throw new Error('Failed to restore backups');
          }
          const data = await response.json();
          console.log(data.message)
          setShowToast(true); 
        } catch (err) {
            setError(err.message);
        }
      };
    


  return (
    <React.Fragment>
      <Button
        onClick={restoreBackup}
        variant="outlined"
        startDecorator={<SettingsBackupRestoreIcon />}
        sx={{
          color: '#239242', 
          borderColor: '#239242', 
          '&:hover': {
            backgroundColor: 'rgba(183, 232, 197, 0.25)', 
            borderColor: '#239242', 
          },
        }}
      > Restaurer cette version
      </Button>
      <ToastRestore open={showToast} handleClose={() => setShowToast(false)} />
    </React.Fragment>
  );
}