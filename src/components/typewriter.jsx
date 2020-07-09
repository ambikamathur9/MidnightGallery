import React from "react";
import Typical from "react-typical";

function typewriter() {
  return (
    <Typical
      steps={[
        "We are a space for",
        1000,
        "We are a space for creating.",
        1000,
        "We are a space for gathering.",
        1000,
        "We are a space for expressing.",
        1000
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
}

export default typewriter;
