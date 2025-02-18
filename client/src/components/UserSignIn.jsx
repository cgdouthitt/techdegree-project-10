import { useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

//This component is used to sign the users in
const UserSignIn = () => {
  const { actions } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let from = "/";
    if (location.state) {
      from = location.state.from;
    }

    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };

    try {
      const user = await actions.signIn(credentials);
      user && navigate(from);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="form--centered">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
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
          Don&apos;t have a user accout? Click here to{" "}
          <Link to="/signup">sign up</Link>!
        </p>
      </div>
    </>
  );
};

export default UserSignIn;
