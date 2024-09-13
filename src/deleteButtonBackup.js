import React, { useEffect, useState } from 'react';
import { Button } from '@mui/joy'; 
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';


export default function DeleteButtonBackup({deleteId, refresh}) {
    const [error, setError] = useState(null);

    const deleteBackup = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/backup/delete/${deleteId}`,
            {method: 'DELETE'});
            
            if (!response.ok) {
            throw new Error('Failed to fetch backups');
          }
          const data = await response.json();
          console.log(data)
          refresh()
        } catch (err) {
            setError(err.message);
        }
      };
    
    //   useEffect(() => {
    //     deleteBackup();
    //   }, []); 

  return (
    <Button
      variant="outlined"
      onClick={deleteBackup}
      startDecorator={<ClearTwoToneIcon />}
      sx={{
        color: '#9C0000', 
        borderColor: '#9C0000', 
        '&:hover': {
          backgroundColor: 'rgba(156, 0, 0, 0.1)', 
          borderColor: '#9C0000', 
        },
      }}
    > Supprimer
    </Button>
  );
}