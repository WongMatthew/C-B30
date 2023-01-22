import CBTlogo from './cb30.png';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import ChatbotApp from './components/ChatbotApp.js'

 function App() {
   return (
     <div className="App">
       <div className='text-blue font-xl'>
         testing
       </div>
       <header className="App-header">
         <ChatBot
           headerTitle="C-B3O"
           recognitionEnable={true}
           steps={[
            {
              id: '1',
              message: 'Type something to search on Wikipédia. (Ex.: Brazil)',
              trigger: 'search',
            },
            {
              id: 'search',
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
