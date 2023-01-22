import CBTlogo from './cb30.png';
import './App.css';
import './dist/output.css';
import ChatBot from 'react-simple-chatbot';
import EmotionCard from './components/EmotionCard.js';
import ChatAPI from './components/ChatAPI.js';
import gratitudeSteps from './config/gratitude_steps';
import { BrowserRouter, Route, Link } from 'react-router-dom';


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
      <div>
        <div class="max-w-3xl mx-auto">
          <h1>Welcome to C-B30</h1>
          <div>
            To get started, pick an emotion that you would like to work with.
            <Link to="/Anger">About
            Testing if this works</Link>
          </div>
          <ul class="flex flex-row space-x-6 pt-6">
            <EmotionCard 
              href={"/Anger"}
              title={"Anxiety"}
              body={"Work through an overwhelming situation."}
            />
            {/* <EmotionCard
              href="https://astro.build/integrations/"
              title="Gratitude"
              body="Take a moment to feel thankful for all that you have."
            />
            <EmotionCard
              href="https://astro.build/themes/"
              title="Anger "
              body="Explore a galaxy of community-built starter themes."
            /> */}
          </ul>
        </div>
      </div>
      
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Why isn't this working
      </p>
    </div>
    
  );
}

export default App;
