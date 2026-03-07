import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Modal,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import { useContext } from "react";
//child component its always child,

function MenuCard({ id, name, descriptioon, image, price, quantity }) {
  const item = { id, name, descriptioon, image, price, quantity };
  console.log(item);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { cart, addToCart } = useContext(CartContext);

  const handleView = () => {
    navigate("/view-details", {
      state: { name, descriptioon, image, price, quantity },
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const cartItem = cart.find((item) => item.id === id);
  const userQuantity = cartItem ? cartItem.quantity : 0;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={image} height="200" />
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{descriptioon}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Add To Cart
          </Button>
          <Button size="small" onClick={handleView}>
            View
          </Button>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            widith: 400,
            margin: "300px",
            padding: "70px",
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "20px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" align="center">
            {name} added to cart! <br />
          </Typography>
          <Typography variant="body1" align="center">
            price: {price}$
          </Typography>
          <Typography variant="body1" align="center">
            descriptioon: {descriptioon}
          </Typography>
          <Typography variant="body1" align="center">
            amount in the store right noe: {quantity}
          </Typography>

          <Typography variant="body1" align="center">
            <Button onClick={() => addToCart(item)}>+</Button>
            quantity user asked for: {userQuantity}
            <Button>-</Button>
          </Typography>

          <Button sx={{ textAlign: "center" }} onClick={handleClose}>
            Done!
          </Button>
        </Box>
      </Modal>
    </>
  );
}
//task: increase decrease the quantity
export default MenuCard;
//props passing from parent to child
