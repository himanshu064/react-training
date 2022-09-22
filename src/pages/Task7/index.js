import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FireBase";
export const WebsiteContext = createContext();

export const WebsiteContextState = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser("noData");
    });
  }, []);

  return (
    <WebsiteContext.Provider value={{ user, loggedIn }}>
      {props.children}
    </WebsiteContext.Provider>
  );
};
function FirstPage() {
  const userData = useContext(WebsiteContext);
  const navigate = useNavigate();
  if (userData.user !== "noData") {
    navigate("/home");
  }
  return (
    <section>
      <div
        style={{
          textAlign: "center",
          fontSize: 60,
          fontFamily: "ui-monospace",
          fontWeight: 600,
          marginTop: 100,
          marginBottom: 150,
        }}
      >
        Welcome To Our Website
      </div>
      <div style={{ textAlign: "center" }}>
        <div>
          <Button variant="primary">
            <Link to="login" style={{ color: "white" }}>
              Login
            </Link>
          </Button>
        </div>
        <br />
        <p>OR</p>
        <br />
        <div>
          <Button variant="primary">
            <Link to="signup" style={{ color: "white" }}>
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export default FirstPage;
