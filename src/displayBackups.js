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
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ITEMS_PER_PAGE = 8; 

export default function DisplayBackups({ refresh, backups }) {
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  function getFormattedTimestamp(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  useEffect(() => {
    refresh();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalPages = Math.ceil(backups.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBackups = backups.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <List className="list">
        <ListItem className='title'>
          <Typography variant="h4">Liste des backups</Typography>
        </ListItem>
        <ListItem className="listTitle">
          <ListItemButton>
            <ListItemDecorator></ListItemDecorator>
            {/* <ListItemContent className="listItemContent">Id</ListItemContent> */}
            <ListItemContent className="listItemContent">Nom de la BDD</ListItemContent>
            <ListItemContent className="listItemContent">Type</ListItemContent>
            <ListItemContent className="listItemContentPath">Path</ListItemContent>
            <ListItemContent className="listItemContent">Date de sauvegarde</ListItemContent>
            <ListItemContent className="listItembackupsContent">Restaurer cette version</ListItemContent>
            <ListItemContent className="listItemContent">Supprimer</ListItemContent>
          </ListItemButton>
          <ListDivider />
        </ListItem>
        {currentBackups.map((bck) => (
          <ListItem key={bck.id} className="listItem">
            <ListItemButton>
              <ListItemDecorator></ListItemDecorator>
              {/* <ListItemContent className="listItemContent">{bck.id}</ListItemContent> */}
              <ListItemContent className="listItemContent">{bck.database_name}</ListItemContent>
              <ListItemContent className="listItemContent">{bck.type}</ListItemContent>
              <ListItemContent className="listItemContentPath">{bck.path}</ListItemContent>
              <ListItemContent className="listItemContent">{getFormattedTimestamp(bck.saved_date)}</ListItemContent>
              <ListItemContent className="listItemContent">
                <RestorButtonBackup restoreId={bck.id}></RestorButtonBackup>
              </ListItemContent>
              <ListItemContent className="listItemContent">
                <DeleteButtonBackup deleteId={bck.id} refresh={refresh}></DeleteButtonBackup>
              </ListItemContent>
            </ListItemButton>
            <ListDivider />
          </ListItem>
        ))}
      </List>

      <div >
        <button className="pagination" onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))} disabled={currentPage === 1}>
          <NavigateBeforeIcon></NavigateBeforeIcon>
        </button>
        <span>{`Page ${currentPage} sur ${totalPages}`}</span>
        <button className="pagination" onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))} disabled={currentPage === totalPages}>
        <NavigateNextIcon></NavigateNextIcon>
        </button>

      </div>
    </div>
  );
}
