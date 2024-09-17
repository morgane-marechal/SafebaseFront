import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuApp({ onMenuSelect }) {
  return (
    <Dropdown>
      <MenuButton  startDecorator={<MenuIcon />}
              sx={{
                fontSize: '1.5rem',
                padding: '1rem',  
                backgroundColor: 'rgb(227, 230, 238)', 
                color: '#383838  ', 
                borderRadius: '8px', 
                '&:hover': {
                  backgroundColor: 'rgb(227, 230, 238, 0.6)', 
                },
      }}>Menu</MenuButton>
      <Menu >
        <MenuItem onClick={() => onMenuSelect('databases')}>Gérer les bases de données</MenuItem>
        <MenuItem onClick={() => onMenuSelect('backups')}>Gérer les backups</MenuItem>
      </Menu>
    </Dropdown>
  );
}