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
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";

function MenuManage() {
  const [pizzaMenu, setPizzaMenu] = useState([
    {
      id: 1,
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
  ]);

  const [editedId, setEditedId] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({});
  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState({});

  const handleAddItem = () => {
    setOpen(!open);
    setNewItem({
      name: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
    });
  };

  const handleSave = () => {
    if (
      !newItem.name ||
      !newItem.description ||
      !newItem.price ||
      !newItem.quantity
    ) {
      toast.error("Please fill all fields");
      return;
    }
    setPizzaMenu([...pizzaMenu, { id: pizzaMenu.length + 1, ...newItem }]);
    toast.success("Added Successfully");
    setOpen(false);
    setNewItem({});
  };
  const handleDelete = (id) => {
    setPizzaMenu(pizzaMenu.filter((pizza) => pizza.id !== id));
    toast.success("Deleted Successfully");
  };
  const handleEdit = (pizza) => {
    setEditedId(pizza.id);
    setUpdatedItem({ ...pizza });
  };
  const handleSaveUpdate = () => {
    if (
      !updatedItem.name ||
      !updatedItem.description ||
      !updatedItem.price ||
      !updatedItem.quantity
    ) {
      toast.error("Please fill all fields");
      return;
    }
    const updatedMenu = pizzaMenu.map((pizza) =>
      pizza.id === editedId ? { ...updatedItem } : pizza
    );
    setPizzaMenu(updatedMenu);
    toast.success("Updated Successfully");
    setEditedId(null);
    setUpdatedItem({});
  };

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ m: 4, fontWeight: "bold", textAlign: "center" }}
      >
        Manage Menu
      </Typography>

      <Button
        variant="contained"
        size="small"
        color="warning"
        onClick={handleAddItem}
      >
        {open ? "Cancel" : "Add New"}
      </Button>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
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
            {pizzaMenu.map((pizza) => (
              <TableRow key={pizza.id}>
                <TableCell>{pizza.id}</TableCell>
                <TableCell>
                  {editedId === pizza.id ? (
                    <TextField
                      value={updatedItem.image}
                      onChange={(e) =>
                        setUpdatedItem({
                          ...updatedItem,
                          image: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Avatar
                      variant="rounded"
                      src={pizza.image}
                      sx={{ width: 50, height: 50 }}
                    />
                  )}
                </TableCell>
                <TableCell>
                  {editedId === pizza.id ? (
                    <TextField
                      value={updatedItem.name}
                      onChange={(e) =>
                        setUpdatedItem({ ...updatedItem, name: e.target.value })
                      }
                    />
                  ) : (
                    pizza.name
                  )}
                </TableCell>
                <TableCell>
                  {editedId === pizza.id ? (
                    <TextField
                      value={updatedItem.description}
                      onChange={(e) =>
                        setUpdatedItem({
                          ...updatedItem,
                          description: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pizza.description
                  )}
                </TableCell>
                <TableCell>
                  {editedId === pizza.id ? (
                    <TextField
                      type="number"
                      value={updatedItem.price}
                      onChange={(e) =>
                        setUpdatedItem({
                          ...updatedItem,
                          price: parseFloat(e.target.value),
                        })
                      }
                    />
                  ) : (
                    pizza.price
                  )}
                </TableCell>
                <TableCell>
                  {editedId === pizza.id ? (
                    <TextField
                      type="number"
                      value={updatedItem.quantity}
                      onChange={(e) =>
                        setUpdatedItem({
                          ...updatedItem,
                          quantity: parseInt(e.target.value),
                        })
                      }
                    />
                  ) : (
                    pizza.quantity
                  )}
                </TableCell>
                <TableCell>
                  {editedId === pizza.id ? (
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={handleSaveUpdate}
                      >
                        Save
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        color="inherit"
                        onClick={() => setEditedId(null)}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  ) : (
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleEdit(pizza)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => handleDelete(pizza.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  )}
                </TableCell>
              </TableRow>
            ))}

            {open && (
              <TableRow>
                <TableCell>{pizzaMenu.length + 1}</TableCell>
                {["image", "name", "description", "price", "quantity"].map(
                  (field) => (
                    <TableCell key={field}>
                      <TextField
                        type={
                          field === "price" || field === "quantity"
                            ? "number"
                            : "text"
                        }
                        value={newItem[field]}
                        onChange={(e) =>
                          setNewItem({ ...newItem, [field]: e.target.value })
                        }
                        label={field.charAt(0).toUpperCase() + field.slice(1)}
                      />
                    </TableCell>
                  )
                )}
                <TableCell>
                  <Button variant="contained" size="small" onClick={handleSave}>
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MenuManage;
