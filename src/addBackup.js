import React , { useEffect, useState } from 'react';
import { Button } from '@mui/joy'; 
import Add from '@mui/icons-material/Add';


export default function AddBackup({databaseId}) {
  const [backups, setBackups] = useState([]);
  const [error, setError] = useState(null);

  
  const buttonStyles = {
    color: 'black',
    cursor: 'pointer',
  };

  const hoverStyles = {
    backgroundColor: '#1565c0',
  };

  // const getDatabase = async() =>{
  //   try {
  //     const response = await fetch(`http://localhost:3001/api/database/${databaseId}`); 
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch database info');
  //     }
  //     const data = await response.json();
  //     setBackups(data); 
  //     console.log(data)
  //     return data
  //   } catch (err) {
  //     setError(err.message); 

  //   }
  // }

  const postDatabaseInfo = async(databaseInfo) => {
    try {
      const response = await fetch(`http://localhost:3001/api/systeme/dump/${databaseId}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
      } else {
        console.error('Server error:', response.statusText);  
      }
    } catch (error) {
      console.error('Error during form submission:', error);  
    }
  } 


  const addBackup = async (event) => {
    postDatabaseInfo(databaseId)
    // const infoData = await getDatabase();
    // console.log("info database",infoData);
    // if (infoData && infoData.length > 0) {  
    //   const database = infoData[0];  
    //   const databaseInfo = {
    //     id : database.id,
    //     user: database.user,
    //     password : database.password,
    //     host: database.host,
    //     port: database.port,
    //     type: database.type
    //   };
      // postDatabaseInfo(databaseInfo);
      // console.log(databaseInfo)
    // } else {
    //   console.error("Aucune information de base de données trouvée.");
    // }

  }

  return (
    <Button
      className="btnBk"
      variant="outlined"
      onClick={addBackup}
      startDecorator={<Add />}
      sx={{
        ...buttonStyles,
        '&:hover': hoverStyles, 
      }}
    >Backup</Button>
  );
}
