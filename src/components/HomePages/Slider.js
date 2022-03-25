import React from "react";

export default function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner  ">
        <div className="carousel-item active text-center ">
          <img
            src="https://www.coe.int/documents/21202288/42594985/Visual_Education_for_Democracy_in_the_Republic_of_Moldova.jpg/d83b18b0-afea-2746-32de-088bf2017243?t=1579702120000"
            className="rounded   "
            style={{ width: 600, height: 300 }}
            alt="..."
          />
        </div>
        <div className="carousel-item text-center ">
          <img
            src="https://www.timeshighereducation.com/sites/default/files/styles/teaser_standard/public/faux-teaser/istock-1263424631.jpg?itok=8WYskZjC"
            className="rounded  "
            style={{ width: 600, height: 300 }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <p>Thank You For Choosing Us</p>
          </div>
        </div>
        <div className="carousel-item text-center ">
          <img
            src="https://assets.weforum.org/global_future_council/image/54ek6O_3C8L0EJYI-oWFFUJpUmzPbhlmnUIQ72NgaHU.jpg"
            className="rounded  "
            style={{ width: 600, height: 300 }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <p>Education For All</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev w-50"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        {/* <span className="visually-hidden">Previous</span> */}
      </button>
      <button
        className="carousel-control-next w-50"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        {/* <span className="visually-hidden">Next</span> */}
      </button>
    </div>
  );
}
