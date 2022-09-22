import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FireBase";
import { useDispatch, useSelector } from "react-redux";
import { userLogIn } from "./action";

function FirstPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(user) => {
            if (user) dispatch(userLogIn(user))
            else dispatch(userLogIn("noData"))
        })
    },[])
    
    const userData = useSelector((state) => state.Data )
    console.log(userData,"userdata")

    
    if (userData!=="noData") {
        navigate("/task8/home")
    }
    return  (
        <section>
            <div style={{
                textAlign: "center",
                fontSize: 60,
                fontFamily: "ui-monospace",
                fontWeight: 600,
                marginTop: 100,
                marginBottom: 150
            }}>
                Welcome To Our Website
            </div>
            <div style={{ textAlign: "center" }}>
                <div>
                    <Button variant="primary" ><Link to="login" style={{ color: "white" }}>Login</Link></Button>
                </div>
                <br />
                <p>OR</p>
                <br />
                <div>
                    <Button variant="primary" ><Link to="signup" style={{ color: "white" }}>Sign Up</Link></Button>
                </div>
            </div>
        </section>
    )
}
export default FirstPage;