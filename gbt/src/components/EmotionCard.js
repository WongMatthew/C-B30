import angry from '../images/angry.png'
import sad from '../images/sad.png'
import happy from '../images/happy.png'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function pleaseGod(int ) {
  
}

function EmotionCard({title, href, image, body}) {

  return (
    <Link  class="" to={href}>
      <img src={image}></img>
      <div className="p-4 border rounded-lg">
        <div className='text-xl font-bold'>
          {title}
        </div>
        <div class="pt-2">
          {body}
        </div>
      </div>
    </Link>
    
  );
}

export default EmotionCard;