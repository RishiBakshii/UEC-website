import React from 'react'
import {Stack,Typography,styled} from '@mui/material'


const CustomStack=styled('div')(({theme})=>({
    display:"flex",
    width:"90%",
    backgroundColor:"white",
    borderRadius:".8rem",
    justifyContent:"space-between",
    alignItems:"center",
    overflow:"hidden",
    padding:"2rem",
    marginTop:"5rem",
    flexWrap:"wrap",
}))

export const ProductStack = ({name,desc,img}) => {
  return (
    <CustomStack>

    <Stack flex={1} justifyContent={"center"} alignItems={"center"} padding={2}>

        <Stack alignSelf={"flex-start"}>
            <Typography mb={10} variant='h4' fontWeight={"300"} fontSize={"3.2rem"}>{name}</Typography>
        </Stack>

        <Stack>
            <Typography variant='p' fontSize={"1.2rem"} lineHeight={"1.8rem"}>{desc}</Typography>
        </Stack>

    </Stack>
    
    <Stack justifyContent={"center"} alignItems={"center"}>
        <img className='card' src={img} alt={img}></img>
    </Stack>


</CustomStack>
  )
}
