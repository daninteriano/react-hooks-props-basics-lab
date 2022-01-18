import React from "react";

import Links from "./Links";


function About(props) {
  function propsReturn(){
    if(props.bio){
      return <p>{props.bio}</p>
    } else {
      return null;
    }
  }
    return (
      <div id="about">
        <h2>About Me</h2>
        {propsReturn()}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
      </div>
    );
}

export default About;
