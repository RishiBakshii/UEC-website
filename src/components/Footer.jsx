import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  return (
    <Box flexWrap={'wrap'} color={'white'} width={'100vw'} padding={12} bgcolor={'#002233'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        
        {/* parent stack for both stacks */}
        <Stack flexWrap={'wrap'} width={'100%'} direction={'row'} justifyContent={"space-between"} alignItems={"center"}>

            {/* address and contact stack */}
            <Stack direction={'column'} justifyContent={'center'} alignItems={'flex-start'} spacing={3} padding={2}>
                <Stack>
                    <Typography fontWeight={900} gutterBottom variant='h5'>Address</Typography>
                    <Typography gutterBottom variant='p'>Head Office - 3950, 2nd Floor, Near HDFC Bank, Behind G.B. Road, Delhi-6</Typography>
                    <Typography variant='p'>Branch Office - 1st Floor, SCO 22, Sec-11, Panchkula, Haryana, 134109</Typography>
                </Stack>

                <Stack>
                    <Typography fontWeight={900} gutterBottom variant='h5'>Contact Info</Typography>
                    <Typography gutterBottom variant='p'>+919810868974</Typography>
                    <Typography  gutterBottom variant='p'>+919876696073</Typography>
                    <Typography variant='p'>+917838573140</Typography>
                </Stack>
            </Stack>

            {/* email and social media stack */}
            <Stack direction={'column'} spacing={3} justifyContent={'center'} alignItems={"flex-start"} padding={2}>
                <Stack>
                    <Typography fontWeight={900} gutterBottom variant='h5'>Email</Typography>
                    <Typography gutterBottom variant='p'>uecbearing@gmail.com</Typography>
                    <Typography variant='p'>uecbearigs@gmail.com</Typography>
                </Stack>
                
                <Stack>
                    <Typography fontWeight={900} gutterBottom variant='h5'>Social Media</Typography>
                    <Button startIcon={<InstagramIcon/>} gutterBottom variant='contained'>uecbearings</Button>
                    <Button sx={{mt:'.4rem'}} startIcon={<FacebookIcon/>} variant='contained'>UECbearings</Button>
                </Stack>
            </Stack>




        </Stack>

    </Box>
  )
}
