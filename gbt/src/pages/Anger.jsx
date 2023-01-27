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
  
  const starter_message = "Ask me this set of questions during our conversation and respond constructively, carry on the conversation based on your intuition but always refer back to the list of questions that need to be asked, respond to this prompt by starting the conversation by asking the first question: how has your day been? what do you think could have improved your day and mood? how do you think that you can change your point of view to improve your mood? Feel free to rephrase the questions to make it fit the context of the conversation better";

    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: async () => {
              const starter_response = await handleUserInput(starter_message);
              return starter_response;
            },
            trigger: 'user',
          },
          {
            id: 'user',
            user: true,
            trigger: async (output) => {
              console.log(output.value);
              if (output.value === 'shut up') {
                //handleEnd();
                return 'end';
              }
              const bot_response_message = await handleUserInput(output.value);
              return 'repeat';
            },
          },
          {
            id: 'repeat',
            message: "bye",
            trigger: 'user',
          },
          {
            id: 'end',
            message: 'Thank you for using the chatbot!',
            end: true, 
          },
        ]}
      />
    );
  };
  
export default Anger;

