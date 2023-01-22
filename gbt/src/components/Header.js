import React, { useState, useEffect } from 'react';
import icon from '../images/main.png'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Header({title, href, body}) {

  return (
    <Link  class="" to={href}>
      <div class="flex max-w-3xl mx-auto flex-row items-center jusify-left pt-2">
        <img className="h-16" src={icon}></img>
        <div className="p-4 rounded-lg">
          <div className='text-3  xl font-bold'>
            C-B30
          </div>
        </div>
      </div>
    </Link>
    
  );
}

export default Header;