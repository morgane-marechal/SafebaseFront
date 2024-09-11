import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

export default function MenuApp() {
  return (
    <Dropdown>
      <MenuButton>Gestion</MenuButton>
      <Menu>
        <MenuItem>Gérer les bases de données</MenuItem>
        <MenuItem>Gérer les backups</MenuItem>
      </Menu>
    </Dropdown>
  );
}