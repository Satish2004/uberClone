import React, { createContext, useState } from "react";

//context which pass data in further components
export const userDataContext = createContext();

const UserContext = ({ children }) => {
  //making data
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      {/* pass data in further components */}
      <userDataContext.Provider value={{ user, setUser }}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;
