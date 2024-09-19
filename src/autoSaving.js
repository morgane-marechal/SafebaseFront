import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useState from 'react';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormSaveAuto({refresh, databaseId}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
        const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log('Form submitted:', formJson);

    try {
      const response = await fetch('http://localhost:3001/api/autosave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson), 
      });
    
      if (response.ok) {
        // const data = await response.json();
        // console.log('Server response:', data);
        // onAdd(data); 
        handleClose();  
      } else {
        console.error('Server error:', response.statusText);  
      }
    } catch (error) {
      console.error('Error during form submission:', error);  
    }
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DataSaverOnIcon></DataSaverOnIcon>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Définir une sauvegarde automatique</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ajoutez les informations pour la sauvegarde automatique.
          </DialogContentText>
          <input type="hidden" name="databaseId" value={databaseId} />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Choisier une fréquence</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="cron"
                className='formRadio'
            >
                <FormControlLabel value="* * * * *" control={<Radio />} label="Toutes les minutes" />
                <FormControlLabel value="0 * * * *" control={<Radio />} label="Toutes les heures" />
                <FormControlLabel value="0 1 * * *" control={<Radio />} label="Tous les jours (à 1:00)" />
                <FormControlLabel value="0 1 1 * *" control={<Radio />} label="Tous les mois (le premier de chaque mois à 1:00)" />

            </RadioGroup>
    </FormControl>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit">Ajouter la sauvegarde automatique</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}