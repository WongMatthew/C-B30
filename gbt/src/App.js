import React, { useState } from 'react';
import Chatbot from 'react-simple-chatbot';

const ChatbotApp = () => {
  const [conversationId, setConversationId] = useState(null);

  // Use this function to call your API and get the chatbot response
  const getResponse = async (userInput, conversationId, parentId) => {
    // Make API call to your chatbot service
    const response = await fetch('http://127.0.0.1:5000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: userInput, conversation_id: conversationId, parent_id: parentId }),
    });
    return response.json();
  }

  useEffect(() => {
    // Start the conversation by passing an initial prompt to the API
    const initialPrompt = "ask me these questions one by one and have a conversation with me about them: Modifying Rules And Assumptions What is the rule (or assumption) I live by that I would like to modify? How does this rule (or assumption) affect me in my day to day life?";
    getResponse(initialPrompt, conversationId, "start").then((response) => {
      setSteps([
        {
          id: '1',
          message: response.answer,
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Thanks for your input',
          end: true,
        },
      ])
    });
  }, []);

  return (
    <Chatbot
      steps={steps}
      botDelay={500}
      handleEnd={(conversationId) => setConversationId(conversationId)}
      handleStepChange={(step) => {
        if (step.user) {
          // Use the user input to call the API and get the response
          getResponse(step.value, conversationId, step.id)
            .then((response) => {
              // Use the API response to update the steps array
              updateSteps(step.id, [
                {
                  id: step.id + '-response',
                  message: response.answer,
                  trigger: '2',
                },
              ]);
            });
        }
      }}
      getResponse={getResponse}
      conversationId={conversationId}
    />
  );
};

export default ChatbotApp;
