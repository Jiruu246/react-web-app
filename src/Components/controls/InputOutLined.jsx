import React from 'react'
import { TextField } from '@mui/material';

const InputOutLined = (props) => {

    const {name, label, value, onChange} = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputOutLined