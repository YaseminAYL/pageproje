import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <form id="contact" action="" method="">
            <h2>Contact Form</h2>
            <div className="form-control">
              <input placeholder="Name..." type="text" required autofocus />
            </div>
            <div className="form-control">
              <input placeholder="E-mail..." type="email" required />
            </div>
            <div className="form-control">
              <input placeholder="Subject..." type="text" required />
            </div>
            <div className="form-control">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <div className="form-control">
              <button name="submit" type="submit" id="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
