import React, { useState } from "react";
import LoginForm from "./Components/LoginForm.js";
import logo from './pink banana.gif';

function App() {
  const adminUser = {
    email:"quibandhemies@gmail.com",
    password: "denden28"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="logged-in">
          <img src={logo} className="logo" alt="Logo" />;
          
          <h2>Name: <span>Dhemie Soco Quiban</span></h2>
          <h2>Course & Section: <span>BSIT32-E2</span></h2>
          <h2>Hobbies: <span>Watching Series</span>,<br></br>
          <span>Eating</span>,<span>Riding on my Motorcycle</span>
          <br></br> 
         </h2>
          
          
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;