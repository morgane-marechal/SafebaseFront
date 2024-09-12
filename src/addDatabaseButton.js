import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Add from '@mui/icons-material/Add';
import React, { useState } from 'react';
import FormNewDatabase from './FormNewDatabase';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function AddDatabaseButton(){
    const [openForm, setOpenForm] = useState('false'); 

    const handleOpenForm = () => {
        setOpenForm(!openForm);


      };

    return(
        <div>
            {openForm ? <FormNewDatabase /> : null}
        </div>
    );
}