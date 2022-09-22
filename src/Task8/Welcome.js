import { signOut } from 'firebase/auth';
import {auth} from "../Firebase/firebase";
import React from 'react'
import { useGlobalContext } from '../context';
import {Link} from 'react-router-dom';

function Welcome() {
  const {isUser} = useGlobalContext();
  const logout = () =>{
    signOut(auth);
    window.alert("Log Out Successfully");
  };
  return (
    <>
    <form className='container'>
    <h2 className='loginhead'> Welcome Page </h2>
    <Link to='/about'>About</Link>
<br />
    <div className="userdata text-center  userdata">
        <h4> User Details</h4>
       <h5>User Email:- {isUser.email} </h5> 
    </div>
    <div className="text-center">
    <button onClick={logout} type="button" className="btn btn-primary btn-block mb-4">Log Out</button>
    </div>
</form>
</>
  )
}

export default Welcome;