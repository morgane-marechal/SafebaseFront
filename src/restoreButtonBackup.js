import React, { useEffect, useState } from 'react';
import { Button } from '@mui/joy'; 
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

export default function RestorButtonBackup({}) {
    const [error, setError] = useState(null);

    // const restoreBackup = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/api/backup/restore/${databaseId}`,
    //         {method: 'DELETE'});
            
    //         if (!response.ok) {
    //         throw new Error('Failed to fetch backups');
    //       }
    //       const data = await response.json();
    //       console.log(data)
    //       refresh()
    //     } catch (err) {
    //         setError(err.message);
    //     }
    //   };
    
    //   useEffect(() => {
    //     deleteBackup();
    //   }, []); 

  return (
    <Button
      variant="outlined"
      // onClick={deleteBackup}
      startDecorator={<SettingsBackupRestoreIcon />}
      sx={{
        color: '#239242', 
        borderColor: '#239242', 
        '&:hover': {
          backgroundColor: 'rgba(183, 232, 197, 0.1)', 
          borderColor: '#239242', 
        },
      }}
    > Restaurer cette version
    </Button>
  );
}