import { useContext, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

const UserSignIn = () => {
  const { user, actions } = useContext(UserContext);
  const navigate = useNavigate();

  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(username);
    console.log(password);
    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(credentials);
    try {
      const user = await actions.signIn(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <main>
      <div className="form--centered">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            email="emailAddress"
            type="email"
            ref={username}
            placeholder="User Name"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            ref={password}
            placeholder="Password"
          />
          <button className="button" type="submit">
            Sign In
          </button>
          <button className="button button-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
        <p>
          Don't have a user accout? Click here to{" "}
          <Link to="/signup">sign up</Link>!
        </p>
      </div>
    </main>
  );
};

export default UserSignIn;
