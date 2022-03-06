import React from "react";
import "./Dictionary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

function Phonetic(props) {
  console.log(props.phonetic);
  let iconStyle = { color: "black" };

  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <span className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faVolumeHigh} size="lg" style={iconStyle} />
        </a>{" "}
        <p className="Phonetic-Text d-inline ms-3"> {props.phonetic.text} </p>
      </span>
    );
  } else {
    return null;
  }
}

export default Phonetic;
