import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    display: "block",
    maxWidth: "55%",
    margin: "40px auto 0 auto",
  },
  name: {
    width: "100%",
    padding: "10px 15px",
    marginBottom: "3px",
    fontSize: "12pt",
    display: "block",
    color: "#fff",
    boxSizing: "border-box",
    background: "#1e242c",
  },
  email: {
    width: "100%",
    padding: "10px 15px",
    marginBottom: "3px",
    fontSize: "12pt",
    display: "block",
    color: "#fff",
    boxSizing: "border-box",
    background: "#1e242c",
  },
  message: {
    width: "100%",
    padding: "10px 15px",
    marginBottom: "3px",
    fontSize: "12pt",
    display: "block",
    color: "#fff",
    boxSizing: "border-box",
    background: "#1e242c",
    minHeight: "150px",
  },
  button: {
    border: "2px solid #fff",
    boxSizing: "inherit",
    cursor: "pointer",
    display: "inline-block",
    transition: "all 0.5s",
    fontSize: "12pt",
    float: "right",
    color: "white",
    padding: "10px 30px",
    margin: "5px 0 0 0",
    fontFamily: "Jazz LET fantasy",
    "&:hover": {
      backgroundColor: "#e7ad99",
    },
  },
});

const ContactForm = () => {
  const [status, setStatus] = useState("SUBMIT");
  const nameInput = React.useRef();
  const mailInput = React.useRef();
  const messageInput = React.useRef();
  const classes = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = event.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const headers = {
      "Content-Type": "applications/json;charset-utf-8",
    };

    let response = await axios.post("http://localhost:5000/contact", {
      headers: headers,
      body: details
    });
    setStatus("SUBMIT");
    alert(response.data.status);

    nameInput.current.value = "";
    mailInput.current.value = "";
    messageInput.current.value = "";
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Name"
          ref={nameInput}
          type="text"
          name="name"
          id="name"
          required
          className={classes.name}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          ref={mailInput}
          type="email"
          name="email"
          id="email"
          required
          className={classes.email}
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          ref={messageInput}
          type="text"
          name="message"
          id="message"
          required
          className={classes.message}
        />
      </div>
      <button className={classes.button} id="submit" type="submit">
        {status}
      </button>
    </form>
  );
};

export default ContactForm;
