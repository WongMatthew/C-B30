import '../App.css';
import '../dist/output.css';
import ChatBot from 'react-simple-chatbot';
import React, { useState } from 'react';
import axios from 'axios';

const bot_response_message = '';

const Anger = () => {
    const [setConversationId] = useState(null);
    const [setParentId] = useState(null);

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
      // BUG: If any step is missing a message or contains a trigger, the chatbot will not work
      <ChatBot
        steps={[
          {
            id: '1',
            message:"Hello, welcome to the chatbot",
            // trigger: 'user',
          },
          // {
          //   id: 'user',
          //   user: true, //functions cannot be async or else it will create errors on chatbot, this has been left here as an example
          //   trigger: async (output) => {
          //     console.log(output.value);
          //     if (output.value === 'shut up') {
          //       //handleEnd();
          //       return 'end';
          //     }
          //     bot_response_message = await handleUserInput(output.value);//main issue here
          //     return 'repeat';
          //   },
          // },
          // {
          //   id: 'repeat',
          //   message: "bye",
          //   trigger: 'user',
          // },
          {
            id: 'end',
            message: 'bye!',
            //https://lucasbassetti.com.br/react-simple-chatbot/#/docs/steps    <-- link to documentation on the custom component, example is provided as well
            // component: /*insert custom component element here, needs to assign bot_response_message using the async function (maybe display if possible) */,
            end: true, 
          },
        ]}
      />
    );
  };
  
export default Anger;

