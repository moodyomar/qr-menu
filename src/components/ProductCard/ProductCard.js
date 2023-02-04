import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MultiActionAreaCard({product:{name,price,picture}}) {
  return (
    <Card sx={{ textAlign:"right",direction:"rtl"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={picture}
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
           ₪{price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}