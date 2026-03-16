import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function Sidebar({ open, toggleSideBar }) {
  const user = JSON.parse(localStorage.getItem("currentrUsers")) || null;
  const role = user?.role;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          bgcolor: "MediumPurple",
          color: "white",
          width: open ? "200px" : "60px",
          minHeight: "100vh",
          p: 2,
          textAlign: "center",
          transition: "width 0.3s ease",
        }}
      >
        {/* role based access=rba */}
        <IconButton
          onClick={toggleSideBar}
          sx={{ color: "MediumPurple", bgcolor: "white", mb: 3 }}
        >
          <MenuIcon />
        </IconButton>
        {open ? (
          <Typography sx={{ p: 2 }}>Hello, {user?.name} </Typography>
        ) : (
          "Hello"
        )}
        <Divider sx={{ bgcolor: "white", mb: 2 }} />
        <List>
          <ListItem button component="div" sx={{ mb: 1 }}>
            <ListItemText primary={open ? "Dashboard" : "D"} />
          </ListItem>
          {role === "admin" && (
            <>
              {/* conditional render components  */}
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "menu" : "M"} />
              </ListItem>
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "users" : "U"} />
              </ListItem>
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "employee" : "E"} />
              </ListItem>
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "logout" : "L"} />
              </ListItem>
            </>
          )}
          {role === "user" && (
            <>
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "Menu" : "M"} />
              </ListItem>
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "Profile" : "P"} />
              </ListItem>
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "Cart" : "C"} />
              </ListItem>
              <ListItem button component="div" sx={{ mb: 1 }}>
                <ListItemText primary={open ? "Messaged" : "MS"} />
              </ListItem>
              <ListItem button component="div" sx={{ mb: 1 }}>
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
