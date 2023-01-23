import CBTlogo from '../cb30.png';
import '../App.css';
import '../dist/output.css';
import EmotionCard from '../components/EmotionCard.js';
import ChatAPI from '../components/ChatAPI.js';
import gratitudeSteps from '../config/gratitude_steps';
import ChatBot from 'react-simple-chatbot';

function Anxiety() {
  return (
    
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div>
        <div class="max-w-3xl mx-auto">
          <div>Testing</div>
        </div>
      </div>
      <div className='flex flex-row w-full items-center justify-center'>
        
        <ChatBot
          steps={[
            {
              id: 'hello-world',
              message: 'Hello Anxiety!',
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

export default Anxiety;
