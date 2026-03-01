import Sidebar from "../../Sidebar/Sidebar.jsx";
import { useState } from "react";
function Dashboard() {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Sidebar open={open} toggleSideBar={toggleSideBar} />
    </>
  );
}

export default Dashboard;
