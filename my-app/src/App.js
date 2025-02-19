import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const baseUrl = 'http://127.0.0.1:3000/reproduce'; //oint to Flask server on port 5000
      
      console.log('Sending POST request to:', baseUrl);

      const res = await axios.post(baseUrl, { input });
      console.log('Server response:', res.data);
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('try again');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-panel">
          <h1 className="App-title">GenAI Chatbot</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Chatbot"
            />
            <button type="submit">Submit</button>
          </form>
          <p>{response}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
