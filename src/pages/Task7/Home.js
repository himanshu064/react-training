import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { WebsiteContext } from ".";
import { auth } from "./FireBase";

function Home() {
    const userData = useContext(WebsiteContext)
    const navigate = useNavigate();
    if(userData.user==="noData"){navigate("/task7")}
    const loggingOut = () =>{
        navigate("/task7")
        signOut(auth);  
    }
    return (
    <div style={{   textAlign: "center",
                    padding: 80
                }}>
        <p>Home page</p>
        <p>Hello, {userData.user.email}</p>
        <Button variant="primary" onClick={()=>loggingOut()} >LogOut</Button>
    </div>
    )
}
export default Home;