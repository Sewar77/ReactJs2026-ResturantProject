import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
function ViewItem() {
  const location = useLocation();
  const { name, descriptioon, image, price, quantity } = location.state || {};
  return (
    <>
      <h1>View food</h1>
      <Container>
        <img src={image} alt="" />
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{descriptioon}</Typography>
        <Typography variant="body1">${price}</Typography>
        <Typography variant="body1">{quantity}</Typography>
      </Container>
    </>
  );
}
export default ViewItem;
//props drilling
