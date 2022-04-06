import React from "react";
import profilePicture from "../../../static/assets/images/bio/profile.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">

      <div 
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <p>
          My name is Adam Lind. I'm a recent graduate of Bottega University's Full-Stack Software Engineering course. 
          When I was in middle school I discovered I could write simple vbScript programs to trick my school teachers 
          into thinking I was hacking the school mainframe and I fell in love with coding.
        </p>

        <p>
          Aside from coding, I'm a big fan of longboarding, wakeboarding, video games, and weightlifting. I am self-driven and continually 
          looking for challenging opportunities to improve my technical and soft skills. I strive to always have a Growth Mindset.
        </p>

      </div>
    </div>
  );
}