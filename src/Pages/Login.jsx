import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const user ={
        userName:"Aslan",
        password:"12345"
    }
    const location = useNavigate()
    const checkUser = (e)=>{
        e.preventDefault()
        if(user.userName === name.current.value && user.password === pass.current.value){
            alert("Login Success")
            localStorage.setItem("User",JSON.stringify(user))
            location('/admin')
        }else{
            alert("Invalid Credentials!")
        }
    }

    const name = useRef()
    const pass = useRef()

  return (

    <>
      <form onSubmit={checkUser}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            ref={name}
          />
        </div>
        <div className="mb-3">
          <input type="password" 
          className="form-control"
          ref={pass}
           />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
