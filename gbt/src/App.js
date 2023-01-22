import CBTlogo from './cb30.png';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import ChatAPI from './components/ChatAPI.js';
import gratitudeSteps from './config/gratitude_steps';
import ChatbotApp from './components/ChatbotApp.js';


function App() {
   return (

     <div className="App">
       <div className='text-blue font-xl'>
       </div>
       <header className="App-header">
       <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hello sad one',
              trigger: 'input',
            },
            {
              id: 'input',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              component: <ChatbotApp />,
              waitAction: true,
              trigger: '1',
            },

          ]}
        />
       </header>
     </div>
   );
 }
export default App;
