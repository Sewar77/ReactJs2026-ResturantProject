import { Box, Container, Divider, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
function ViewItem() {
  const location = useLocation();
  const { name, descriptioon, image, price, quantity } = location.state || {};
  return (
    <>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        View Menu Item
      </Typography>
      <Divider sx={{ m: 2, bgcolor: "black" }} />
      <Container
        sx={{
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          component="img"
          src={image}
          sx={{ width: "100%", maxWidth: 400, boxShadow: 3, borderRadius: 3 }}
        />
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
