import { Button } from "@mui/material";
import React from "react";
import "./Form.css";
// import {Button} from '@mui/material'

function Form() {
  return (
    <form className="form">
      <div className="form__50section">
        <label>
          Your name
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label>
          Your Email
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
      </div>
      <label>
        Your message
        <textarea
          className="form__message"
          type="text"
          name="message"
          placeholder="Hi I think we need a web designer and developer hope you can help."
        ></textarea>
      </label>
      <Button variant="outlined">Send message</Button>
    </form>
  );
}

export default Form;
