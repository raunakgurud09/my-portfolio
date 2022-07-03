import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
// import {Button} from '@mui/material'

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //backend would listen to this and send to mailing list and twillio
    try {
      const res = await axios.post("http://localhost:3001/send", {
        name: name,
        message: message,
        email: email,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, [handleSubmit]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__50section">
        <label>
          Your name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Your Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <label>
        Your message
        <textarea
          className="form__message"
          type="text"
          name="message"
          placeholder="Hi I think we need a web designer and developer hope you can help."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>
      <Button variant="outlined" onClick={handleSubmit}>
        Send message
      </Button>
    </form>
  );
}

export default Form;
