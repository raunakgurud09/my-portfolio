import React from 'react'
import './project.css'

function Project(props) {
  return (
    <div className="Project__container">
    <a href="">
      <img src={props.image} alt="from unsplash" />
    </a>
    <div className="Project__text-container">
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </div>
  </div>
  )
}

export default Project