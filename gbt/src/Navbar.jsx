import icon from './images/main.png'
import React from "react";
import './dist/output.css';
import EmotionCard from './components/EmotionCard.js';
import { BrowserRouter, Route, Link } from "react-router-dom";

import angerImg from './images/angry.png'
import anxImg from './images/sad.png'
import happyImg from './images/happy.png'

function Navbar() {
  return (
    <div className="container mx-auto bg-blue-grey rounded-xl p-8 m-10">
      <div>
        <div className="max-w-3xl mx-auto">
          <div className="text-3xl font-bold">Welcome to C-B30</div>
          <div>
            To get started, pick an emotion that you would like to work with.
            <div class="pt-6 flex flex-row space-x-4">
              <EmotionCard
                href={"/Anger"}
                title={"Anger"}
                image={angerImg}
                body={"Work through an overwhelming situation."}
              />
              <EmotionCard
                href={"/Anxiety"}
                title={"Anxiety"}
                image={anxImg}
                body={"Work through an overwhelming situation."}
              />
              <EmotionCard
                href={"/Gratitude"}
                title={"Gratitude"}
                image={happyImg}
                body={"Work through an overwhelming situation."}
              />
            </div>
            {/* <Link to="/">Home</Link>
            <Link to="/anger">Anger</Link> */}

          </div>
        </div>
      </div>
    </div>      
  );
}

export default Navbar;