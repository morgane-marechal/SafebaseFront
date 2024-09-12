import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

export default function MenuApp({ onMenuSelect }) {
  return (
    <Dropdown>
      <MenuButton>Gestion</MenuButton>
      <Menu>
        <MenuItem onClick={() => onMenuSelect('databases')}>Gérer les bases de données</MenuItem>
        <MenuItem onClick={() => onMenuSelect('backups')}>Gérer les backups</MenuItem>
      </Menu>
    </Dropdown>
  );
}