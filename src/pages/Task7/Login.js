import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { WebsiteContext } from ".";
import { auth } from "./FireBase";

function Login() {
  const userData = useContext(WebsiteContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();
  function handleSubmit(e) {
    e.preventDefault();
  }
  if (userData.user !== "noData") {
    navigate("/home");
  }
  async function checkLogin() {
    if (!email || !password) {
      alert("Please fill all the details");
    } else {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        navigate("/home");
      } catch (error) {
        alert(error);
      }
    }
  }
  function signinWithGoogleButton() {
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        alert("Login successfull");
      })
      .catch((error) => {
        console.log("error");
      });
  }
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <Container
        style={{
          paddingTop: 100,
          paddingRight: 200,
          paddingBottom: 360,
          paddingLeft: 150,
        }}
      >
        <div
          style={{
            fontSize: 40,
            textAlign: "center",
            fontFamily: "-webkit-body",
            fontWeight: 600,
          }}
        >
          Login Page
        </div>
        <br />
        <Form style={{ display: "block" }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={checkLogin}>
            Submit
          </Button>
          <GoogleButton onClick={signinWithGoogleButton} />
        </Form>
      </Container>
    </div>
  );
}
export default Login;
