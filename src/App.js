import logo from './logo.svg';
import './App.css';
import MenuApp from './Menu';
import DisplayDatabases from './displayDatabases';
import Addbutton from './addDatabaseButton';
import DisplayBackups from './displayBackups';
import React, { useState } from 'react';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('databases'); 
  const handleMenuSelection = (selection) => {
    setSelectedMenu(selection);
    console.log(selectedMenu)
  };
  return (
    <div className="App">
      <header className="App-header">
      <MenuApp className="menuApp" onMenuSelect={handleMenuSelection}></MenuApp>
      </header>
      <body>
        {selectedMenu === 'databases' && <DisplayDatabases />}
        {selectedMenu === 'backups' && <DisplayBackups />}
        {/* <DisplayDatabases>
        </DisplayDatabases>
        <DisplayBackups>
        </DisplayBackups> */}
      </body>
    </div>
  );
}

export default App;
