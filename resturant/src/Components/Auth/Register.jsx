import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext.jsx";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { register } = useContext(UserContext);

  // handle register click
  const handleRegister = () => {
    register(userData);
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Name"
            name="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            fullWidth
            required
            helperText="Password must be at least 8 characters"
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;
