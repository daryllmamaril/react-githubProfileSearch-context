import React from "react";

const Contact = () => {
  return (
    <div className="ui container" style={{ padding: "105px" }}>
      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="field">
          <label>E-mail</label>
          <input type="email" placeholder="johndoe@gmail.com" />
        </div>

        <div className="field">
          <label>Leave us a message:</label>
          <textarea rows="2"></textarea>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
