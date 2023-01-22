import CBTlogo from './cb30.png';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import ChatAPI from './components/ChatAPI.js';
import gratitudeSteps from './config/gratitude_steps';



function App() {
  return (

    <div className="App">
      <div className='text-blue'>
        testing
      </div>
      <header className="App-header">
        <ChatBot
          headerTitle="C-B3O"
          recognitionEnable={true}
          steps={gratitudeSteps}
          />
      </header>
    </div>
  );
}

export default App;
