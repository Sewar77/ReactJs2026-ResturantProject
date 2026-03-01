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
  const { user } = useContext(UserContext);
  const role = user?.role;
  return (
    <>
      <Box>
        {/* role based access=rba */}
        <IconButton onClick={toggleSideBar} sx={{ color: "grey" }}>
          <MenuIcon />
        </IconButton>
        {open && <Typography sx={{ p: 2 }}>Hello, {user?.name} </Typography>}
        <List>
          <ListItem button>
            <ListItemText primary={open ? "Dashboard" : "D"} />
          </ListItem>
          {role === "user" && (
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
          {role === "admin" && (
            <>
              <ListItem button>
                <ListItemText primary=" Menu" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="profile" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="ordered" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="cart" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="logout" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </>
  );
}
export default Sidebar;
