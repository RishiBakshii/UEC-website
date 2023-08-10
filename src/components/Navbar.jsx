import { AppBar, Button, Stack, TextField, Toolbar ,Typography,styled} from '@mui/material'
import React from 'react'
import theme from '../theme'
import { Link } from 'react-router-dom'


const CustomToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    height:"7rem",
})

const NavLinks=styled(Typography)({
    cursor:'pointer',
})

export const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{backgroundColor:theme.palette.primary.main,boxShadow:"none"}}>
        <CustomToolbar>
            <Typography variant='h6' fontSize={'1.8rem'} fontWeight={"600"}>Unique Engineering Company</Typography>
            <TextField inputProps={{style:{color:"white",fontSize:"1.3rem"}}} sx={{width:"20%",color:"white"}} label='Search for bearings..'></TextField>
            <Stack direction={'row'} spacing={7}>
                <NavLinks variant='p'><Link style={{"textDecoration":'none',color:theme.palette.fontColor.light}} to={'/'}>Home</Link></NavLinks>
                <NavLinks variant='p'><Link style={{"textDecoration":'none',color:theme.palette.fontColor.light}} to={'/about'}>About</Link></NavLinks>
                <NavLinks variant='p'><Link style={{"textDecoration":'none',color:theme.palette.fontColor.light}} to={'/contact'}>Contact</Link></NavLinks>
                <NavLinks variant='p'><Link style={{"textDecoration":'none',color:theme.palette.fontColor.light}} to={'/services'}>Services</Link></NavLinks>
            </Stack>
        </CustomToolbar>
    </AppBar>
  )
}
