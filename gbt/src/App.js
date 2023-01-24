import CBTlogo from './cb30.png';
import './App.css';
import './dist/output.css';
import ChatBot from 'react-simple-chatbot';
import EmotionCard from './components/EmotionCard.js';
import ChatAPI from './components/ChatAPI.js';
import gratitudeSteps from './config/gratitude_steps';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div>
        <div class="max-w-3xl mx-auto">
          <h1>Welcome to C-B30</h1>
          <div>
            To get started, pick an emotion that you would like to work with.
          </div>
          <ul class="flex flex-row space-x-6 pt-6">
            <EmotionCard 
              href={"/Anger"}
              title={"Anger"}
              body={"Work through an overwhelming situation."}
            />
            <EmotionCard
              href={"/Anxiety"}
              title={"Anxiety"}
              body="Take a moment to feel thankful for all that you have."
            />
            <EmotionCard
              href={"/Gratitude"}
              title={"Gratitude"}
              body="Explore a galaxy of community-built starter themes."
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
