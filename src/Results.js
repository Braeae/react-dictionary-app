import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

function Results(props) {
  console.log(props.results);

  if (props.results !== null) {
    return (
      <div>
        <h2>{props.results.word}</h2>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        <br />

        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default Results;

//Since map() has a function inside we have a new return inside return.
