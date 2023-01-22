import CBTlogo from '../cb30.png';
import '../App.css';
import '../dist/output.css';
import ChatBot from 'react-simple-chatbot';
import EmotionCard from '../components/EmotionCard.js';
import ChatAPI from '../components/ChatAPI.js';
import gratitudeSteps from '../config/gratitude_steps';

import botIcon from '../images/main.png';

function Anger() {
  return (
    
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-0 w-full">
      <ChatBot
          width="100%"
          height="650px"
          botAvatar={botIcon}
          userDelay='250'
          steps={[
            {
              id: 1,
              message: 'Say something',
              trigger: 2,
            },
            {
              id: 2,
              user: true,
              trigger: (output) => {
                if(output.value === "stop"){
                  return 4;
                }
                return 3;
              },
            },
            {
              id: 3,
              message: 'Say something else!',
              trigger: 2,
            },
            {
              id: 4,
              message: 'Ok, I\'ll stop now',
              end: true,
            }
          ]}
        />
    </div>
    
  );
}

export default Anger;
