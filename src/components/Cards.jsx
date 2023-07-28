import React from "react";
import {Card,CardActionArea,CardContent,Typography,CardMedia} from '@mui/material'

export const Cards = ({title,content,img}) => {
  return (
    <Card sx={{ maxWidth: 300 ,boxShadow:"0 0 1rem 1px #19191919"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt="image here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
