import React from "react";
import "./Dictionary.css";

function Phonetic(props) {
  console.log(props.phonetic);

  if (props.phonetic.audio) {
    return (
      <span className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen{" "}
        </a>{" "}
        <p>{props.phonetic.text}</p>
      </span>
    );
  } else {
    return <p>{props.phonetic.text}</p>;
  }
}

export default Phonetic;
