import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Badge from '@mui/material/Badge';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';

export default function LeftImageCard(props: any) {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    // margin: "10px",
  };

  const mediaStyle = {
    minWidth: "200px",
    maxWidth: "200px",
    height: "20vh",
    // margin: "10px",
  };
  const contentStyle ={
    padding:"10px"
  }


  return (
    <Card style={cardStyle}>
      <img style={mediaStyle} src={props.imageUrl} title={props.title} />
      <CardContent sx={{ px: '6em' }}>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <CardActions>
          <Button size="small">Shortlist</Button>
          <Button size="small">Call</Button>
          <Button size="small">Email</Button>
          <Button size="small">Chat</Button>
        </CardActions>
      </CardContent>
      <CardContent >
        <Badge badgeContent={4} color="primary">
          <BedIcon color="action" />
        </Badge>
      </CardContent>
      <CardContent>
        <Badge badgeContent={3} color="primary">
          <BathroomIcon color="action" />
        </Badge>
      </CardContent>
    </Card>
  );
}