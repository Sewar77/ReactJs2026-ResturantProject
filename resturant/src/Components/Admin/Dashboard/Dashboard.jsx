import { Box } from "@mui/material";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import { useState } from "react";
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
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Sidebar open={open} toggleSideBar={toggleSideBar} />
        <Box>
          <Navbar />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
