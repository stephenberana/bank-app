import React from "react";
import "./login.css";

console.log("Submit Button clicked!");

class SubmitButton extends React.Component {
  render() {
    return (
      <div className="submitButton">
        <button className="submitbtn">Submit</button>
      </div>
    );
  }
}

export default SubmitButton;
