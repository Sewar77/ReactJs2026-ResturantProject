import { Button } from "@mui/material";
import { useEffect, useState } from "react";
function Theme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const handleSwitchMode = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    // if (theme==="light"){
    //     theme="dark"
    // }else{
    //     theme="light"
    // }
  };
  useEffect(() => {
    //cosntraint render
    document.body.style.backgroundColor =
      theme === "light" ? "#ffffff" : "#010101";
    document.body.style.color = theme === "light" ? "#000" : "#fff";

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Button onClick={handleSwitchMode}>
        {theme === "light" ? "dark" : "light"}
      </Button>
    </>
  );
}
export default Theme;
