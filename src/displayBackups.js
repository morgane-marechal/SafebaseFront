import React, { useEffect, useState } from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import DeleteButtonBackup from './deleteButtonBackup';
import './App.css';
import Typography from '@mui/material/Typography';
import RestorButtonBackup from './restoreButtonBackup';

export default function DisplayBackups() {
  const [backups, setBackups] = useState([]);
  const [error, setError] = useState(null);

  function  getFormattedTimestamp(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

  const fetchBackups = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/backup'); 
      if (!response.ok) {
        throw new Error('Failed to fetch backups');
      }
      const data = await response.json();
      setBackups(data); 
      console.log(data)
    } catch (err) {
      setError(err.message); 
    }
  };

  useEffect(() => {
    fetchBackups();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }
  
    
  return (

    <List className="list">
      <ListItem className='title'><Typography variant="h4" >Liste des backups</Typography></ListItem>
        <ListItem className="listTitle">
          <ListItemButton>
          <ListItemDecorator></ListItemDecorator>
          <ListItemContent className="listItemContent">Id</ListItemContent>
          <ListItemContent className="listItemContent">Nom de la BDD</ListItemContent>
          <ListItemContent className="listItemContent">Type</ListItemContent>
          <ListItemContent className="listItemContentPath">Path</ListItemContent>
          <ListItemContent className="listItemContent">Date de sauvegarde</ListItemContent>
          <ListItemContent className="listItemContent">Restaurer cette version</ListItemContent>
          <ListItemContent className="listItemContent">Supprimer</ListItemContent>
          </ListItemButton>
          <ListDivider/>
        </ListItem>
    {backups.map((bck, index) => (
        <ListItem className="listItem">
          <ListItemButton>
          <ListItemDecorator></ListItemDecorator>
          <ListItemContent className="listItemContent">{bck.id}</ListItemContent>
          <ListItemContent className="listItemContent">{bck.database_name}</ListItemContent>
          <ListItemContent className="listItemContent">{bck.type}</ListItemContent>
          <ListItemContent className="listItemContentPath">{bck.path}</ListItemContent>
          <ListItemContent className="listItemContent">{getFormattedTimestamp(bck.saved_date)}</ListItemContent>
          <ListItemContent className="listItemContent"><RestorButtonBackup restoreId={bck.id} ></RestorButtonBackup></ListItemContent>
          <ListItemContent className="listItemContent"><DeleteButtonBackup deleteId={bck.id} refresh={fetchBackups}></DeleteButtonBackup></ListItemContent>
          </ListItemButton>
          <ListDivider/>
        </ListItem>
    ))}

    </List>
  );
}