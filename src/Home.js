import React from 'react';
import picture from './project images/Picture.jfif';
import './App.css';

function Home() {
    return (
      <div className = "home">
        <div className = "picture"><img src = {picture} alt = "a computer" /></div>
        <div className = "intro">
          <h1>Hi!<br/> I'm Ismahan Imran—</h1>
          <h2>a full-stack web developer<br/> seamlessly integrating AI algorithms for enhanced accessibility on the web.</h2>
        </div>
      </div>
    );
  }

  export default Home;