import React from 'react'
import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material';

const PaperBordered = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2),
    borderRadius: 30
}));

export default PaperBordered