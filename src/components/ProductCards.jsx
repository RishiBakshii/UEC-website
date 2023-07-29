import React from 'react'
import {Card,CardActionArea,CardContent,Typography,CardMedia,CardActions,Button,styled, Box} from '@mui/material'


const CustomCardContent=styled(Box)({
  backgroundColor:"orange",
  height:"100%",
  display:"flex",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  flexDirection:"column"
})

export const ProductCards = ({name,despriction,img}) => {
  return (
    <Card sx={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",padding:"2rem",bgcolor:"blue"}}>


      <CustomCardContent>

        <Typography flex={1} gutterBottom variant="h6" component="div" fontSize={"3rem"}>
          {name}
        </Typography>

        <Typography flex={1} variant="body2" color="text.secondary" fontSize={"1.2rem"}>
            {despriction}
        </Typography>
      </CustomCardContent>

      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      
      <CardMedia
        sx={{height:"40rem",width:"40rem"}}
        image={img}
        title="green iguana"
      />

    </Card>
  )
}
