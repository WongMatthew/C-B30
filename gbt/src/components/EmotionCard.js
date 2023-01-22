import React, { useState, useEffect } from 'react';

function EmotionCard({title}) {

  return (
    <a class="border rounded-lg p-4" href="/">
        <div class="text-xl font-bold">
          {title}
        </div>
        <div class="pt-2">
          test
        </div>
    </a>
  );
}

export default EmotionCard;