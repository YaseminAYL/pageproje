import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container-sm text-info bg-dark opacity-75 text-center mb-3">
        <img
          src="https://catesco.org/wp-content/uploads/2017/11/30208394.jpg"
          alt=""
          style={{ width: 600, height: 300, marginTop: 10 }}
        />
        <p>Every child has the right to access safe, quality education. </p>
        <p>
          However, 124 million children across the world are out of school and
          250 million are not learning basic skills as a result of poor quality
          education.
        </p>
        <p>
          Girls, children with disabilities, those from minority groups and
          children living in poor and remote areas are most often denied access
          to education. This has far-reaching consequences on their futures and
          those of their families, communities and countries.
        </p>
        <p>
          We promote free, equal access to quality education for all children
          from early learning to secondary education. We work with children,
          their families, communities, wider society and governments, and
          advocate at both local and international levels, so that all children
          are able to get an education.
        </p>
        <footer>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <i className="fa-solid fa-phone nav-link "></i>
            </li>
            <li className="nav-item">
              <i className="fa-brands fa-facebook nav-link"></i>
            </li>
            <li className="nav-item">
              <i className="fa-brands fa-twitter nav-link"></i>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default About;
