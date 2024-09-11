import logo from './logo.svg';
import './App.css';
import MenuApp from './Menu';
import DisplayDatabases from './displayDatabases';
import Addbutton from './addDatabaseButton';
import DisplayBackups from './displayBackups';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MenuApp className="menuApp"></MenuApp>
      </header>
      <body>
        <DisplayDatabases>
        </DisplayDatabases>
        <DisplayBackups>
        </DisplayBackups>
      </body>
    </div>
  );
}

export default App;
