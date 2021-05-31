import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewOtp from './components/NewOtp';

export interface IState {
  phone: string,
  response: {status: boolean; data: object}
}

function App() {

  const [phone, setPhone] = useState<IState["phone"]>('')
  const [response, setResponse] = useState<IState["response"]>({
    status: false,
    data: {}
  })

  return (
    <div className="App">
      <h3>Please provide your phone number to generte an OTP</h3>
      <NewOtp phone={phone} setPhone={setPhone} setResponse={setResponse} />
      {(response.status === true) ? 
        <p>OTP has been generated, it expires in 60s</p> :
        <p></p>
      }
    </div>
  );
}

export default App;
