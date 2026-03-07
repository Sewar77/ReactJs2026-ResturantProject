import { Container, Box } from "@mui/material";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import { useState } from "react";
import About from "../../About/About.jsx";
import Menu from "../Menu/Menu.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
function Dashboard() {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          p: 0,
          margin: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Sidebar open={open} toggleSideBar={toggleSideBar} />
        <Box>
          <Navbar />
          <Menu />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
