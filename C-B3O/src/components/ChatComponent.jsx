import React, { useState } from "react";
const reactProps = React.props;


export default function Toasters(props) {  
    return (
        <div class="pt-2">
            Test component: 
            {props.reactProps}
        </div>
    );
  };