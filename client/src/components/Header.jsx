import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

//This component has a few navigation buttons for basic sign up/in/out and home page navigation
const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          {user === null ? (
            <ul className="header--signedout">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          ) : (
            <ul className="header--signedin">
              <li>Welcome, {user?.firstName + " " + user?.lastName}!</li>
              <li>
                <Link to="/signout">Sign Out</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
