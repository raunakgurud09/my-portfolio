import React from 'react'
import './project.css'

function Project() {
  return (
    <div className="Project__container">
    <a href="https://source.unsplash.com/random/500X500">
      <img src="https://source.unsplash.com/random/50X50" alt="from unsplash" />
    </a>
    <div className="Project__text-container">
      <h3>This is title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, rem!
      </p>
    </div>
  </div>
  )
}

export default Project