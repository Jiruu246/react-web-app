import { Button } from '@mui/material';
import React from 'react'

const IconWButton = (props) => {

    const {startIcon, value, sx} = props;
    return (
        <Button variant='outlined' startIcon={startIcon} sx={{my:2, py:1, width:'100%', borderRadius:2}}>{value}</Button>
    )
}

export default IconWButton