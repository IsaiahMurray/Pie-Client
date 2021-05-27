import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [sessionToken, setSessionToken] = useState("Token");
  console.log(sessionToken);

  return (
    <div className="App">
      <Navbar setSession={sessionToken}/>
      <p>This is a test!</p>
      {sessionToken}
    </div>
  );
}

export default App;
