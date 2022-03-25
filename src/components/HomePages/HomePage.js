import React, { Component } from "react";
import { Form } from "./Form";
import Slider from "./Slider.js";

export class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Slider />
        <Form />
      </div>
    );
  }
}

export default HomePage;
