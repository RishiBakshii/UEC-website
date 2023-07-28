import React from 'react'
import {Card,CardActionArea,CardContent,Typography,CardMedia,CardActions,Button} from '@mui/material'

export const ProductCards = ({name,despriction,img}) => {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {despriction}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
