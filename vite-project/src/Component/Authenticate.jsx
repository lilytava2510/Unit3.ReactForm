import React from "react";
import { useState } from "react";


export default function Authenticate({token}){
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [username, setUsername] = useState("")
  const [iat, setIat] = useState("")


  async function handleClick(){
     try {
     const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
     });
     const {data} = await response.json();
     setSuccessMessage(data.message)
     setUsername(data.username)
     setIat(data.iat)
     console.log(data.username)
     console.log(data.iat)
     } catch (error){
        setError(error.message)
     }     
  }
     

    return (
        <div>    <h2>Authenticate!</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}

        <button onClick={handleClick}  >Authenticate Token</button>
        <p>Username: {username}</p>
        <p>Password: {iat}</p>

        </div>

        
    )
}