import React, { useEffect, useState } from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import './App.css';
import Addbutton from './addDatabaseButton';
import AddBackup from './addBackup';
import Typography from '@mui/material/Typography';
import FormSaveAuto from './autoSaving'


export default function DisplayDatabases(fetchBackups) {
  const [databases, setDatabases] = useState([]);
  const [error, setError] = useState(null);

  const handleNewDatabase = (newDatabase) => {
    fetchDatabases();
    };

  const fetchDatabases = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/database'); 
      if (!response.ok) {
        throw new Error('Failed to fetch databases');
      }
      const data = await response.json();
      setDatabases(data); 
      console.log(data)
    } catch (err) {
      setError(err.message); 
    }
  };

  useEffect(() => {
    fetchDatabases();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  return (

    <List>
          <ListItem> <Typography variant="h4" >Liste des bases de données</Typography></ListItem>
          <ListItem><Addbutton onAdd={handleNewDatabase} /></ListItem>
          <ListItem className="listTitle">
          <ListItemButton>
          <ListItemDecorator></ListItemDecorator>
          <ListItemContent className="listItemContent">User</ListItemContent>
          <ListItemContent className="listItemContent">Name</ListItemContent>
          <ListItemContent className="listItemContent">Host</ListItemContent>
          <ListItemContent className="listItemContent">Port</ListItemContent>
          <ListItemContent className="listItemContent">Type</ListItemContent>
          <ListItemContent className="listItemContent">Container</ListItemContent>
          <ListItemContent className="listItemContent">Nouvelle sauvegarde</ListItemContent>
          <ListItemContent className="listItemContent">Sauvegarde automatique</ListItemContent>
          </ListItemButton>
          <ListDivider/>
        </ListItem>
    {databases.map((db, index) => (
        <ListItem className="listItem">
          <ListItemButton>
          <ListItemDecorator></ListItemDecorator>
          <ListItemContent className="listItemContent">{db.user}</ListItemContent>
          <ListItemContent className="listItemContent">{db.name}</ListItemContent>
          <ListItemContent className="listItemContent">{db.host}</ListItemContent>
          <ListItemContent className="listItemContent">{db.port}</ListItemContent>
          <ListItemContent className="listItemContent">{db.type}</ListItemContent>
          <ListItemContent className="listItemContent">{db.container_name}</ListItemContent>
          <ListItemContent className="listItemContent"><AddBackup databaseId={db.id}></AddBackup></ListItemContent>
          <ListItemContent className="listItemContent"><FormSaveAuto databaseId={db.id} refresh={fetchBackups}></FormSaveAuto></ListItemContent>
          </ListItemButton>
          <ListDivider/>
        </ListItem>
    ))}

    </List>
  );
}