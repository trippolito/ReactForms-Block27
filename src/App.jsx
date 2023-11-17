import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';
import './App.css'

function App() {
  const [token, setToken] = useState(null);


  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      &nbsp; &nbsp;
      <Authenticate token={token} setToken={setToken} />

    </>
  )
}

export default App
