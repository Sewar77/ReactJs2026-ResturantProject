import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./Components/Auth/Register.jsx";
import ViewItem from "./Components/Menu/ViewItem.jsx";
import Login from "./Components/Auth/Login.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import Dashboard from "./Components/User/Dashboard/Dashboard.jsx";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      {/* define routes only */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/view-details" element={<ViewItem />} />
      </Routes>
    </>
  );
}

export default App;
