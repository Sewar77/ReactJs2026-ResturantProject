import MenuCard from "./MenuCard.jsx";
import { Grid, Typography, Container } from "@mui/material";

//parent component
function MenuList() {
  const pizzaMenu = [
    {
      id: 1, //unique value
      name: "Margherita",
      description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
      image: "./src/assets/pizza1.jpg",
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Spicy pepperoni slices on a tomato sauce base.",
      image: "./src/assets/pizza2.jpg",
    },
    {
      id: 3,
      name: "Hawaiian",
      description: "Ham and pineapple topping for a sweet and savory flavor.",
      image: "./src/assets/pizza3.jpg",
    },
    {
      id: 4,
      name: "Vegetarian",
      description:
        "Assorted vegetables including mushrooms, onions, peppers, and olives.",
      image: "./src/assets/pizza1.jpg",
    },
    {
      id: 5,
      name: "Meat Lovers",
      description:
        "Pepperoni, sausage, ham, and bacon for a hearty meaty experience.",
      image: "./src/assets/pizza2.jpg",
    },
  ];
  return (
    <>
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold">
          Our Menu
        </Typography>
        <Grid container spacing={12}>
          {pizzaMenu.map((pizza) => {
            return (
              <Grid item xs={12} sm={6} md={5} key={pizza.id}>
                <MenuCard
                  name={pizza.name}
                  descriptioon={pizza.description}
                  image={pizza.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
//sewarjihad@sdkjordan.com ==> my email
export default MenuList;
