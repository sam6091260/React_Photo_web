import React from "react";
import sss from "../image/sss.png";

const About = () => {
  return (
    <div className="about" style={{ minHeight: "100vh" }}>
      <img src={sss} alt="sss_face" />
      <h1>About</h1>
      <p>
        It's my REACT practise project. <br />
        Create by SHANE
      </p>
    </div>
  );
};

export default About;
