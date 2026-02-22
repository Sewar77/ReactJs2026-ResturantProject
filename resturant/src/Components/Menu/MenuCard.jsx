import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
//child component its always child,
function MenuCard({ name, descriptioon, image }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={image} height="200" />
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{descriptioon}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default MenuCard;
//props passing from parent to child
