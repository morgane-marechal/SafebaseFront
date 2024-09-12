import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Add from '@mui/icons-material/Add';
import React, { useState } from 'react';
import FormNewDatabase from './FormNewDatabase';

export default function AddDatabaseButton({onAdd}){
    const [openForm, setOpenForm] = useState('false');
    const [databases, setDatabases] = useState([]);
 

    const handleOpenForm = () => {
        setOpenForm(!openForm);
      };

    return(
        <div>
            {openForm ? <FormNewDatabase onAdd={onAdd} /> : null}
        </div>
    );
}