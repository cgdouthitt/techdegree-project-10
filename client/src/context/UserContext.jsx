import { createContext, useState } from "react";
import { api } from "../utils/apiHelper";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const signInUser = async (credentials) => {
    console.log(credentials);
    const response = await api("/users", "GET", null, credentials);
    console.log(response);
    const newUser = {
      username,
      password,
    };

    setUser(newUser);
  };

  const signOutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        actions: {
          signIn: signInUser,
          signOut: signOutUser,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
