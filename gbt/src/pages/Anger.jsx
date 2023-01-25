import '../App.css';
import '../dist/output.css';
import ChatBot from 'react-simple-chatbot';
import React, { useState } from 'react';
import axios from 'axios';


const Anger = () => {
    const [conversationId, setConversationId] = useState(null);
    const [parentId, setParentId] = useState(null);
  
    const handleEnd = () => {
      // Code to handle end of conversation
    };
  
    const handleUserInput = async (userInput) => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/ask', {
          user_input: userInput,
          conversation_id: conversationId,
          parent_id: parentId,
        });
  
        setConversationId(response.data.conversation_id);
        setParentId(response.data.parent_id);
  
        return response.data.message;
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Welcome to the chatbot! How can I help you today?',
            trigger: 'user',
          },
          {
            id: 'user',
            user: true,
            trigger: async (value) => {
              console.log(value);
              if (value === 'ending phrase') {
                handleEnd();
                return 'end';
              }
              const message = await handleUserInput(value);
              return message;
            },
          },
          {
            id: 'end',
            message: 'Thank you for using the chatbot! Have a great day!',
            end: true,
          },
        ]}
      />
    );
  };
  
export default Anger;

