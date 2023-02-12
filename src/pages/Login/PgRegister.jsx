import { Avatar, Button, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import FrmRegister from './Form/FrmRegister'
import PaperBordered from '../../Components/Others/PaperBordered'
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import IconWButton from '../../Components/Buttons/IconWButton';
import GoogleIcon from '@mui/icons-material/Google';
import { Padding } from '@mui/icons-material';

const PgRegister = () => {

  return (
    <Grid>
      <PaperBordered 
        elevation={10} 
        sx={{height:450, width:300, margin:'10% auto', px:4 }}>
        <Grid align='center'>
          <Avatar sx={{margin:1, backgroundColor:"#84a98c"}}><VpnKeyRoundedIcon/></Avatar>  
          <Typography variant='h4' sx={{my:1}}>Super Chat</Typography>
          <FrmRegister/>
          <Button variant='contained' sx={{width:'100%', borderRadius:2, py:1, my:2}}>Register</Button>
          <Divider>OR</Divider>
          <IconWButton startIcon={<GoogleIcon/>} value='Sign In with Google'/>
          <Typography variant='body2'>Already have an account?
            <Link href='#'> Login</Link>
          </Typography>
        </Grid>
      </PaperBordered>
    </Grid>
  )
}

export default PgRegister
