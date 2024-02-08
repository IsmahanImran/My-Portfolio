import React from 'react';
import './App.css';
import Todo from './project images/Project1.png';

function Projects() {
    return (
      <div className = "projects">
        <h1 className = "heading">Projects</h1>
        <ul>
          <a href = "https://to-do-list-by-ismahan.netlify.app/"><li className = "project">
            <div className = "tile"><img src = {Todo} alt = "todo list"/></div>
            <p>To-do List Website</p>
          </li></a>
          <li className = "project">
            <div className = "tile"></div>
            <p>Project 2</p>
          </li>
          <li className = "project">
            <div className = "tile"></div>
            <p>Project 3</p>
          </li>
          <li className = "project">
            <div className = "tile"></div>
            <p>Project 4</p>
          </li>
          <li className = "project">
            <div className = "tile"></div>
            <p>Project 5</p>
          </li>
          <li className = "project">
            <div className = "tile"></div>
            <p>Project 6</p>
          </li>
        </ul>
      </div>
    );
  }

  export default Projects;