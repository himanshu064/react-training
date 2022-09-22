import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase/FireBase";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { CheckUser } from "./action/action";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.CheckUser;
  });
  // console.log(data);

  const checkSignup = async (e) => {
    e.preventDefault();
    if (
      username === "" &&
      password === "" &&
      confirmPassword === "" &&
      email === ""
    ) {
      alert("Please fill all the fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("sign up successful", result.user.email);
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          username,
          email,
        });
        await setDoc(doc(db, "userChats", result.user.uid), {});
        dispatch(CheckUser(username));
        navigate("/task9");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          SignUp Page
        </div>
        <br />
        <Form style={{ display: "block" }} onSubmit={checkSignup}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={checkSignup}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SignUp;
