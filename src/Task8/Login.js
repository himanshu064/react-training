import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth} from "../Firebase/firebase";
import {useDispatch,useSelector} from 'react-redux';
import {setLogin} from '../redux/actions/formAction'

function Login() {
  const selector = useSelector((state)=>state.login.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    if (!user.Password || !user.Email) {
      window.alert("Please fill out the filed");
      return;
    }
   try {
    const result = await signInWithEmailAndPassword(auth,user.Email, user.Password);
    dispatch(setLogin(result))
    console.log(result,'res')
    window.alert(`Yahoo Log In Completed ${result.user.email}`);
   } catch (error) {
    window.alert(error.message);
   }  
  };

  const googleProvider = new GoogleAuthProvider()
  const signInWithGoogle = () =>{
  signInWithPopup(auth, googleProvider).then(res => {
    dispatch(setLogin(res))
  window.alert("Log In With Google Successfully");
  })
  .catch((error) => {
  window.alert(error.message);
  });
  return;
  }

  return (
    <>
     <form className='container' >
    <h2 className='loginhead'> Welcome To Log In Page </h2>
    <div className="mb-3" >
     <label htmlFor="Email" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="name@example.com"
        name="Email" value={user.Email} onChange={onHandleChange}/>
    </div>
    <div className="mb-3">
     <label htmlFor="Email" className="form-label"> Password</label>
        <input type="email" className="form-control" placeholder="Enter Your Password" name="Password" value={user.Password} onChange={onHandleChange}/>
    </div>
  <div className="text-center">
  <button onClick={HandleSubmit}  type="button" className="btn btn-primary btn-block mb-4">Log In</button>
  </div>
  <div className="text-center">
  <p>or</p>
  <p>Log In With Google  </p>   
  <button type="button" className="btn btn-link btn-floating mx-1">
      <i onClick={signInWithGoogle} className="fab fa-google fa-2x"></i>
  </button>
  <br />
  <br />
  <p> Not a User ?<Link to="/Register" className="nav-link">Register here</Link> </p> 
  </div>
</form>
    </>   
  );
};

export default Login;