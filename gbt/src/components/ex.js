/* import React, { useState } from 'react';
import Chatbot from 'react-simple-chatbot';
import { useEffect } from 'react';

const ChatbotApp = () => {
  const [steps, setSteps] = useState([]);
  const [conversationId, setConversationId] = useState(null);

  // Use this function to call your API and get the chatbot response
  const getResponse = async (userInput, conversationId, parentId) => {
    // Make API call to your chatbot service
    const response = await fetch('http://your-server-url/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: userInput, conversation_id: conversationId, parent_id: parentId }),
    });
    return response.json();
  }

  // Use this function to update the steps array with dynamic messages
  const updateSteps = (trigger, stepsToAdd) => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      const triggerIndex = newSteps.findIndex((step) => step.id === trigger);
      newSteps.splice(triggerIndex + 1, 0, ...stepsToAdd);
      return newSteps;
    });
  }

  useEffect(() => {
    // Initialize the steps array with the starting message
    setSteps([
      {
        id: '1',
        message: 'Hello, what can I help you with today?',
        trigger: '2',
      },
    ]);
  }, []);

  return (
    <Chatbot
      steps={steps}
      botDelay={500}
      handleEnd={(conversationId) => setConversationId(conversationId)}
      handleStepChange={(step) => {
        // Check if the current step is a user input
        if (step.user) {
          // Use the user input to determine the next step
          switch (step.value) {
            case 'help':
              updateSteps(step.id, [
                {
                  id: 'help',
                  message: 'I can help you with information about our products and services. What would you like to know?',
                  trigger: '3',
                },
              ]);
              break;
            case 'order':
              updateSteps(step.id, [
                {
                  id: 'order',
                  message: 'Sure, I can help you place an order. What product would you like to order?',
                  trigger: '3',
                },
              ]);
              break;
            default:
              updateSteps(step.id, [
                {
                  id: 'default',
                  message: 'I\'m sorry, I didn\'t understand your request. Can you please rephrase that?',
                  trigger: '2',
                },
              ]);
              break;
          }
        }
      }}
      getResponse={getResponse}
      conversationId={conversationId} */