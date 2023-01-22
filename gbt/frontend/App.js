import CBTlogo from './cb30.png';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import ChatAPI from './components/chatAPI.js';


const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: 1
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
  {
    id: 'serial-response',
    component: <ChatAPI />,
    end: true,
    waitAction: true,
    trigger: '1',
  }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatBot
          headerTitle="Speech Recognition"
          recognitionEnable={true}
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you!',
              end: true,
            },
          ]}
          />
      </header>
    </div>
  );
}

export default App;
