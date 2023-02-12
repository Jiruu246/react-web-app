import React from 'react'
import { styled } from '@mui/material/styles'

const RootForm = styled('form')(({theme}) =>({
  [`& .MuiFormControl-root`]: {
    width:'100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

function FrmGenericInput(props){
  return (
    <RootForm className='classes.root'>
        {props.children}
    </RootForm>
  )
}

export default FrmGenericInput