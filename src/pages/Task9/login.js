import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserChatData } from "./action/action";
import { auth } from "./firebase/FireBase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const data = useSelector((state) => state.MyChatData);
  const dispatch = useDispatch();
  const username = useSelector((state) => {
    return state.CheckUser;
  });
  console.log(username);

  useEffect(() => {
    dispatch(UserChatData());
  }, []);

  async function userData(e) {
    e.preventDefault();
    if (!email && !password) {
      alert("Fill All Fields First");
    } else {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log("email:", email, "password:", password);

        navigate("./home");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <div style={{ margin: "10px" }}>Welcome to Chat Box</div>
      <Form style={{ flexDirection: "column" }} onSubmit={userData}>
        <input
          style={{ margin: "10px" }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="ENTER EMAIL"
        />
        <br />
        <input
          style={{ margin: "10px" }}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="ENTER PASSWORD"
        />
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ margin: "10px" }}
            variant="success"
            type="submit"
            onClick={userData}
          >
            Click Me
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
