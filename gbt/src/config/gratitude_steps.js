import ChatbotApp from '../components/ChatbotApp.js';
import React from 'react';

const gratitudeSteps = [
  {
    id: '0',
    message: 'Welcome to C-B3O.',
    trigger: 1
  },
  {
    id: '1',
    message: 'Bye!',
    trigger: 'chat-api'
  },
  {
    id: 'chat-api',
    component: <ChatbotApp/>,
    end: true,
    waitAction: true,
    trigger: 1
  }
];

export default gratitudeSteps;
