import React from "react";
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2 className="h2">What our students say?</h2>
      <div className="testimonials-content">
        <div className="peter">
          <img src={testimonial1} alt="" />
          <div className="name">Peter Adams</div>
          <div className="desc">
            This is a great course. I got to learn a lot.
          </div>
        </div>
        <div className="robert">
          <img src={testimonial2} alt="" />
          <div className="name">Robert Fox</div>
          <div className="desc">
            I got to learn a lot about Music
            <span>Production with this course. Thanks.</span>
          </div>
        </div>
        <div className="emily">
          <img src={testimonial3} alt="" />
          <div className="name">Emily Smith</div>
          <div className="desc">Awesome! Great job!!</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
