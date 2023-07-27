import { AppBar, Stack, Toolbar ,Typography,styled} from '@mui/material'
import React from 'react'
import theme from '../theme'


const CustomToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    height:"7rem"
})

const NavLinks=styled(Typography)({
    cursor:'pointer',
})

export const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{backgroundColor:theme.palette.primary.main}}>
        <CustomToolbar>
            <Typography variant='h6' fontSize={'1.8rem'} fontWeight={"600"}>Unique Engineering Company</Typography>
            <Stack direction={'row'} spacing={7}>
                <NavLinks variant='p'>Home</NavLinks>
                <NavLinks variant='p'>About</NavLinks>
                <NavLinks variant='p'>Contact</NavLinks>
                <NavLinks variant='p'>Services</NavLinks>
            </Stack>
        </CustomToolbar>
    </AppBar>
  )
}
