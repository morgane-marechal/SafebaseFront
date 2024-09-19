import logo from './logo.svg';
import './App.css';
import MenuApp from './Menu';
import DisplayDatabases from './displayDatabases';
import Addbutton from './addDatabaseButton';
import DisplayBackups from './displayBackups';
import React, { useEffect, useState } from 'react';


function App() {
  const [selectedMenu, setSelectedMenu] = useState('databases');
  const [backups, setBackups] = useState([]);
  const [error, setError] = useState(null);


  const handleMenuSelection = (selection) => {
    setSelectedMenu(selection);
    console.log(selectedMenu)
  };

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
    // refresh
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
      <MenuApp className="menuApp" onMenuSelect={handleMenuSelection}></MenuApp>
      </header>
      <body>
        {selectedMenu === 'databases' && <DisplayDatabases  refresh={fetchBackups}/>}
        {selectedMenu === 'backups' && <DisplayBackups backups={backups} refresh={fetchBackups}/>}
      </body>
    </div>
  );
}

export default App;
