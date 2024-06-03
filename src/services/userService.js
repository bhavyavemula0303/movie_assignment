import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const saveUserDetails = (userDetails) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(userDetails);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUserDetails = (email, password) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(
    (user) => user.email === email && user.password === password
  );
};
