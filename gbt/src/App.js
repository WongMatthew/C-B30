import CBTlogo from './cb30.png';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import ChatAPI from './components/ChatAPI.js';
import gratitudeSteps from './config/gratitude_steps';


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
function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Why isn't this working
      </p>
    </div>
  );
}

export default App;
