import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BIO MEDICAL ENGINEER",
          "WEB DESIGNER",
          "VIDEO EDITER",
          "TRAVELLER",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
