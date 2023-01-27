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
  

    // IM DOING THE PROMISES WRONG AND IDK IF I WANT ASYNC OR AWAIT 
    // const handleUserInput = async (userInput) => {
    //   try {
    //     const response = await axios.post('http://127.0.0.1:5000/ask', {
    //       user_input: "hello",
    //       conversation_id: null,
    //       parent_id: null,
    //     });
    //     setConversationId(response.data.conversation_id);
    //     setParentId(response.data.parent_id);
    //     return response.data.message;
    //   } catch (err) {
    //     console.log(err);
    //     console.log('Error in handleUserInput');
    //     return 'Error Occured';
    //   }
    // };

    const handleUserInput = async (userInput) => {
      try {
          const response = await axios.post('http://127.0.0.1:5000/ask', {
              user_input: userInput,
              conversation_id: null,
              parent_id: null,
          }, { timeout: 100000 });
          setConversationId(response.data.conversation_id);
          setParentId(response.data.parent_id);
          console.log(response.data.response)
          return response.data.response;
      } catch (err) {
          if (err.code === 'ECONNABORTED') {
              console.log('Error: Request took too long to complete')
              return 'Error Occured';
          }
          console.log(err);
          console.log('Error in handleUserInput');
          return 'Error Occured';
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
            trigger: async (output) => {
              console.log(output);
              if (output.value === 'shut up') {
                handleEnd();
                return 'end';
              }
              bot_response_message = await handleUserInput(output.value);
              return 'repeat';
            },
          },
          {
            id: 'repeat',
            message: bot_response_message,
            trigger: 'user',
          },
        ]}
      />
    );
  };
  
export default Anger;

