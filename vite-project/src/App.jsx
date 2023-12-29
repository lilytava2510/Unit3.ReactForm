import { useState } from 'react'
import SignUpForm from './Component/SignUpForm'
import Authenticate from './Component/Authenticate'
import './App.css'

function App() {
const [token, setToken] = useState(null)

  return (
    <>
      <div>
     <Authenticate token={token} setToken={setToken} />
     <SignUpForm token={token} setToken={setToken}/>
      </div>
     
    </>
  );
};

export default App

