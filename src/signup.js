import React, { useState } from "react";
import './home.css';
import axios from 'axios';
import Header from "./Card";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [chekpassword, setChekPassword] = useState(false);
  const [chekrepeatpassword, setChekRepeatPassword] = useState(false);
  const [chekname, setChekName] = useState(false);
  const [flag, setFlag] = useState(true);
  const [emailerr, setEmailErr] = useState('');
 
 


  async function handleSubmit(e) {
    e.preventDefault();

    // Initialize flag to true and check the conditions to set it
    let localFlag = true;
    if (name.length < 4 || password.length < 8 || password2 !== password) {
      localFlag = false;
      setFlag(false);
    } else {
      localFlag = true;
      setFlag(true);
    }

    if (localFlag) {
      try {
        let response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
          name: name,
          email: email,
          passwordconfirmation: password2,
          password: password,
        });

        if (response.status === 201) {
          window.localStorage.setItem('email', email);
          window.location.pathname = './';
        }
      } catch (err) {
        if (err.response) {
          setEmailErr(err.response.status);
        }
      }
    }

    setChekName(true);
    setChekRepeatPassword(true);
    setChekPassword(true);
  }

  return (
    <>
  <Header/>
      <div className="heases">
     
        <form onSubmit={handleSubmit}>
          {name.length < 4 && chekname && (
            <p className="error">You should contain your name with at least 4 letters</p>
          )}
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          {window.localStorage.getItem('email') ? (
            <p>You are already logged in with email: {window.localStorage.getItem('email')}</p>
          ) : (


 

            <>
              <input
                type="email"
                placeholder="Email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {chekname && emailerr === 422 && (
                <p className="error">Email is already taken</p>
              )}
              <br />
            </>
          )}
          {password.length < 8 && chekpassword && (
            <p className="error">You should enter at least 8 characters</p>
          )}
          <br />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {password2 !== password && chekrepeatpassword && (
            <p className="error">Passwords do not match</p>
          )}
          <input
            type="password"
            placeholder="Repeat Password..."
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <br />
          <button type="submit">Click here</button>
        </form>
      </div>
    </>
  );
}
