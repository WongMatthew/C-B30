import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatAPI() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/chat', {
        message: message,
        conversation_id: null,
        parent_id: null
      })
      .then(res => {
        setResponse(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default Chatbot;