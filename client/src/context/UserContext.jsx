import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { api } from "../utils/apiHelper";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const cookie = Cookies.get("authenticatedUser");

  const [user, setUser] = useState(cookie ? JSON.parse(cookie) : null);

  const signInUser = async (credentials) => {
    const response = await api("/users", "GET", null, credentials);

    if (response.status === 200) {
      const user = await response.data;
      setUser(user);
      Cookies.set("authenticatedUser", JSON.stringify(user), {
        expires: 1,
      });
      return user;
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  };

  const signOutUser = () => {
    setUser(null);
    Cookies.remove("authenticatedUser");
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
