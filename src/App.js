import React, { useState } from 'react';
import { API } from 'aws-amplify';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  const signUp = async () => {
    await API.post('BackendAPI', '/signup', {
      body: {
        name, email, password, birthdate, phoneNumber
      }
    });
  };

  const signIn = async () => {
    await API.post('BackendAPI', '/signin', {
      body: { email, password }
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <input placeholder="Birthdate" onChange={e => setBirthdate(e.target.value)} />
      <input placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>

      <h2>Sign In</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default App;
