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
  const currentrUsers = JSON.parse(localStorage.getItem("currentrUsers"));
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
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
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
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
              color: "#000",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/")}
            >
              Home
            </Button>

            <Button variant="contained" color="secondary">
              Gallery
            </Button>

            {role === "user" ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/messages")}
              >
                Contact
              </Button>
            ) : (
              <Button variant="contained" color="secondary">
                Manage User
              </Button>
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
              <Button variant="contained" color="secondary">
                Menu
              </Button>
            )}

            {currentrUsers ? (
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderColor: "white",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
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
