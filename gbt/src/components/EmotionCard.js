import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function EmotionCard({title, href, body}) {

  return (
    <Link  class="" to={href}>
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