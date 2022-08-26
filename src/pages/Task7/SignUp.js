import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { WebsiteContext } from ".";
import { auth } from "./FireBase";


function SignUpPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const userData = useContext(WebsiteContext)
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
    }
    if (userData.user!=="noData") {
        navigate("/task7/home")
    }
    async function checkSignup() {

        if (username === "" && password === "" && confirmPassword === "" && email === "") {
            alert("Please fill all the fields")
        } 
        else if (password !== confirmPassword) {
                alert("Passwords do not match")
            }
        else {
                try{
                    const result = await createUserWithEmailAndPassword(auth,email,password)
                    console.log("sign up successful",result.user.email)
                    navigate("/task7/login")
                }catch(error){} 
            }
        }
    return <div style={{backgroundColor: "aliceblue"}}>
        <Container style={{paddingTop: 100,
                paddingRight: 200,
                paddingBottom: 360,
                paddingLeft: 150}}>
            <div style = {{
                fontSize: 40,
                textAlign: "center",
                fontFamily: "-webkit-body",
                fontWeight: 600}}>
                SignUp Page
            </div>
            <br />
            <Form style={{ display: "block" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={checkSignup}>
                    Submit
                </Button>
            </Form>
        </Container>
    </div>
}
export default SignUpPage;