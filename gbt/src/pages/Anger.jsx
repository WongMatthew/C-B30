import CBTlogo from '../cb30.png';
import '../App.css';
import '../dist/output.css';
import ChatBot from 'react-simple-chatbot';
import EmotionCard from '../components/EmotionCard.js';
import ChatAPI from '../components/ChatAPI.js';
import gratitudeSteps from '../config/gratitude_steps';

// function App() {
//   return (

//     <div className="App">
//       <div className='text-blue font-xl'>
//         testing
//       </div>
//       <header className="App-header">
//         <ChatBot
//           headerTitle="C-B3O"
//           recognitionEnable={true}
//           steps={gratitudeSteps}
//           />
//       </header>
//     </div>
//   );
// }
function Anger() {
  return (
    
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div>
        <div class="max-w-3xl mx-auto">
          <h1>Testing</h1>
          <div>
            Please work
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full items-center justify-center'>
        
        <ChatBot
          steps={[
            {
              id: 'hello-world',
              message: 'Hello World!',
              end: true,
            },
            {
              id: 'hello-world',
              message: 'Hello World!',
              end: true,
            },
          ]}
        />
      </div>
    </div>
    
  );
}

export default Anger;
