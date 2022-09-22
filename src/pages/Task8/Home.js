import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "./FireBase";

function Home() {
  const userData = useSelector((state) => state.Data);
  const navigate = useNavigate();
  if (userData === "noData") {
    navigate("/");
  }
  const loggingOut = () => {
    navigate("/");
    signOut(auth);
  };
  return (
    <div style={{ textAlign: "center", padding: 80 }}>
      <p>Home page</p>
      <p>Hello, {userData && userData.email}</p>

      <Button variant="primary" onClick={() => loggingOut()}>
        LogOut
      </Button>
    </div>
  );
}
export default Home;
