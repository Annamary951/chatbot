import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const host = process.env.REACT_APP_API_HOST || '127.0.0.1';
      const port = process.env.REACT_APP_API_PORT || '5000';
      const baseUrl = `http://${host}:${port}/reproduce`;
      
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
