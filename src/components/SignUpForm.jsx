import { useState } from 'react';


const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        });

      const result = await response.json();

      setToken(result.token);

      console.log(result);

    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <b>Username:</b> <input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        &nbsp; &nbsp; &nbsp;
        <label>
          <b>Password:</b> <input value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        &nbsp; &nbsp;
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;


