import React, { useState } from "react";
import "./Topics.css";
import {
  frequencies,
  daw,
  vocals,
  mixing,
  mixingConsole,
  mastering,
  yellow,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);

  return (
    <section className="topics">
      <h2>What will you learn?</h2>
      <div className="wrapper">
        <ul>
          <li onMouseEnter={() => setCurrentImage(frequencies)}>
            What are frequencies
          </li>
          <li onMouseEnter={() => setCurrentImage(daw)}>Using DAW</li>
          <li onMouseEnter={() => setCurrentImage(vocals)}>
            Vocals Processing
          </li>
          <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
          <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
            Mixing Console
          </li>
          <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
        </ul>
        <div className="thumbnail-wrap">
          <img className="thumbnail" src={currentImage} alt="topic thumbnail" />
          <div className="yellow">
            <img src={yellow} alt="yellow accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
