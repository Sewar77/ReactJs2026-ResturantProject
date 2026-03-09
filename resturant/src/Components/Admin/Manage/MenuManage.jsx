import {
  Avatar,
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function MenuManage() {
  const pizzaMenu = [
    {
      id: 1, //unique value
      name: "Margherita",
      description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Spicy pepperoni slices on a tomato sauce base.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 3,
      name: "Hawaiian",
      description: "Ham and pineapple topping for a sweet and savory flavor.",
      image: "./src/assets/pizza3.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 4,
      name: "Vegetarian",
      description:
        "Assorted vegetables including mushrooms, onions, peppers, and olives.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 5,
      name: "Meat Lovers",
      description:
        "Pepperoni, sausage, ham, and bacon for a hearty meaty experience.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
    },
  ];
  return (
    <>
      <Container>
        <Typography
          variant="h3"
          sx={{
            m: 4,
            fontWeight: "bold",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Manage Menu
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pizzaMenu.map((pizza) => {
                return (
                  <TableRow key={pizza.id}>
                    <TableCell>{pizza.id}</TableCell>
                    <TableCell>
                      <Avatar
                        variant="rounded"
                        src={pizza.image}
                        sx={{ width: 50, height: 50 }}
                      />
                    </TableCell>
                    <TableCell>{pizza.name}</TableCell>
                    <TableCell>{pizza.description}</TableCell>
                    <TableCell>{pizza.price}</TableCell>
                    <TableCell>{pizza.quantity}</TableCell>
                    <TableCell align="center">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        <Button variant="contained" size="small">
                          Edit
                        </Button>
                        <Button variant="contained" size="small" color="error">
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default MenuManage;
