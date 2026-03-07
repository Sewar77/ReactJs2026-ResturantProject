import { useState, createContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();
//login, register, logout
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  //get current user from local storage when app load
  useEffect(() => {
    const storedUser = localStorage.getItem("currentrUsers");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (userData) => {
    const { name, email, password, role = "user" } = userData;
    //validation
    if (!name || !email || !password) {
      toast.error("please fill all fields");
      return;
    }
    if (password.length < 8) {
      toast.error("password must me more than 7 charecters");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || []; //get all users [{user1}, {user2}, {newuser}]

    const isExisted = users.find((user) => user.email === email);
    if (isExisted) {
      toast.error("Email already exist, please login");
      return;
    }
    //create new user
    const newUser = { id: Date.now(), name, email, password, role };
    //add user to users - save user
    // users.push(newUser); copy better than push because push mutate the original array and copy create new array with new user
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("Register successful. try login");
    navigate("/login");
    return true;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("users", users);
    const existUser = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log("current user", existUser?.role);
    if (!existUser) {
      toast.error("Incorrect email or password");
      return;
    }
    localStorage.setItem("currentrUsers", JSON.stringify(existUser));
    toast.success("Login successfllu");
    if (existUser?.role === "user") {
      navigate("/user/dashboard");
    } else {
      navigate("/admin/dashboard");
    } //role based access
    return;
  };

  const logout = () => {
    localStorage.removeItem("currentrUsers");
  };
  return (
    <UserContext.Provider
      value={{
        register,
        login,
        logout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
