import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormNewDatabase() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Ajouter une BDD
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ajoutez les informations de connexion à une base de données existente.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin=""
            id="type"
            name="type"
            label="type"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin=""
            id="user"
            name="user"
            label="user"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            required
            margin=""
            id="name"
            name="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            required
            margin=""
            id="password"
            name="password"
            label="mot de passe"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin=""
            id="host"
            name="host"
            label="host"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin=""
            id="port"
            name="port"
            label="port"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin=""
            id="container_name"
            name="container_name"
            label="container"
            type="text"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Ajouter la connexion</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}