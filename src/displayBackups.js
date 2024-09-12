import React, { useEffect, useState } from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import './App.css';




export default function DisplayBackups() {
  const [backups, setBackups] = useState([]);
  const [error, setError] = useState(null);

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
    // <div>
    //   <h2>Database List</h2>
    //   <ul>
    //     {databases.map((db, index) => (
    //       <li key={index}>{db.name}</li> 
    //     ))}
    //   </ul>
        
    // </div>

    <List className="list">
        <ListItem className="listTitle">
          <ListItemButton>
          <ListItemDecorator></ListItemDecorator>
          <ListItemContent className="listItemContent">Nom de la BDD</ListItemContent>
          <ListItemContent className="listItemContent">Type</ListItemContent>
          <ListItemContent className="listItemContentPath">Path</ListItemContent>
          <ListItemContent className="listItemContent">Date de sauvegarde</ListItemContent>
          </ListItemButton>
          <ListDivider/>
        </ListItem>
    {backups.map((bck, index) => (
        <ListItem className="listItem">
          <ListItemButton>
          <ListItemDecorator></ListItemDecorator>
          <ListItemContent className="listItemContent">{bck.database_name}</ListItemContent>
          <ListItemContent className="listItemContent">{bck.type}</ListItemContent>
          <ListItemContent className="listItemContentPath">{bck.path}</ListItemContent>
          <ListItemContent className="listItemContent">{bck.saved_date}</ListItemContent>
          
          </ListItemButton>
          <ListDivider/>
        </ListItem>
    ))}

    </List>
  );
}