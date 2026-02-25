import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

//child component its always child,
function MenuCard({ name, descriptioon, image, price, quantity }) {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/view-details", { state: { name, descriptioon, image, price, quantity } });
  };
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
          <Button size="small" onClick={handleView}>
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default MenuCard;
//props passing from parent to child
