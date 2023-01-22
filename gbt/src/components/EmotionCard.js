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
      <div className="p-4 bg-zinc-100 border rounded-lg">
        <div className='flex flex-row items-center justify-center'>
            <div className='pl-2'>
                <div className='text-2xl font-bold'>
                  {title}
                </div>
              <div className='pt-2 flex flex-row items-center justify-center'>
                <div class="">
                  {body}
                </div>
                <img className='h-20' src={image}></img>
              </div>
            </div>
        </div>
      </div>
    </Link>
    
  );
}

export default EmotionCard;