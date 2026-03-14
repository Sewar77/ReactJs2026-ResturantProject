import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../Theme/Theme.jsx";
import { UserContext } from "../../Context/UserContext.jsx";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

function Navbar() {
  const { logout, user } = useContext(UserContext);
  console.log(user);
  const role = user?.role;
  const currentrUsers = localStorage.getItem("currentrUsers");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        color: "black",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: 1,
            }}
            onClick={() => navigate("/")}
          >
            🍕 Pizza
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              color: "#000",
            }}
          >
            <Button onClick={() => navigate("/")}>Home</Button>

            <Button>Gallery</Button>

            {role === "user" ? (
              <Button onClick={() => navigate("/messages")}>Contact</Button>
            ) : (
              <Button>Manage User</Button>
            )}

            {role === "admin" ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/admin/manage-menu")}
              >
                Manage Menu
              </Button>
            ) : (
              <Button>Menu</Button>
            )}

            {currentrUsers ? (
              <Button
                variant="outlined"
                sx={{
                  borderColor: "white",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button onClick={() => navigate("/register")}>Register</Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            )}

            <Theme />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
