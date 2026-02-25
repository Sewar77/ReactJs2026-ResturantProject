import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import ViewItem from "./Components/Menu/ViewItem.jsx";
function App() {
  return (
    <>
      {/* define routes only */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view-details" element={<ViewItem />} />
      </Routes>
    </>
  );
}

export default App;
