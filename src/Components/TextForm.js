import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("clicked");
    var newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("clicked");
    var newText = text.toLowerCase();
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Enter text here</h2>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
