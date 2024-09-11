import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Add from '@mui/icons-material/Add';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function AddDatabaseButton(){
    return(
        <Button startDecorator={<Add />}>
        {/* <IconButton > */}
            Ajouter une BDD
          {/* <FavoriteBorder /> */}
        {/* </IconButton> */}
        </Button>
    );
}