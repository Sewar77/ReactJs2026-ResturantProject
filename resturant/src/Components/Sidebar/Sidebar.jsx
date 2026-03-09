import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function Sidebar({ open, toggleSideBar }) {
  const user = localStorage.getItem("currentrUsers");
  const role = user?.role;
  return (
    <>
      <Box
        sx={{
          p: 3,
          bgcolor: "MediumPurple",
          color: "white",
          minHeight: "100vh",
        }}
      >
        {/* role based access=rba */}
        <IconButton
          onClick={toggleSideBar}
          sx={{ color: "grey", bgcolor: "white" }}
        >
          <MenuIcon />
        </IconButton>
        {open && <Typography sx={{ p: 2 }}>Hello, {user?.name} </Typography>}
        <List>
          <ListItem button>
            <ListItemText primary={open ? "Dashboard" : "D"} />
          </ListItem>
          {role === "admin" && (
            <>
              {/* conditional render components  */}
              <ListItem button>
                <ListItemText primary={open ? "menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "users" : "U"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "employee" : "E"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "logout" : "L"} />
              </ListItem>
            </>
          )}
          {role === "user" && (
            <>
              <ListItem button>
                <ListItemText primary={open ? "Menu" : "M"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Profile" : "P"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Cart" : "C"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Messaged" : "MS"} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={open ? "Logout" : "L"} />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </>
  );
}
export default Sidebar;
