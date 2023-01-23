import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 ,textAlign:"right",direction:"rtl"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://picsum.photos/300"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            עוגה שוקולד
          </Typography>
          <Typography variant="body2" color="text.secondary">
            עוגה שוקולד מיוחד עם טעם של תות ושילוב של חמוץ מתוק שמשלב בין בספלורה ובננה כמו שלא טעמתם אף פעם בחיים שלכם.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h4" component="div">
            25₪
          </Typography>
      </CardActions>
    </Card>
  );
}