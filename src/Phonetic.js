import React from "react";

function Phonetic(props) {
  console.log(props.phonetic);

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank">
          Listen{" "}
        </a>
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return <p>{props.phonetic.text}</p>;
  }
}

export default Phonetic;
