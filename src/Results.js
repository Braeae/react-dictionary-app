import React from "react";
import "./Dictionary.css";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";

function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div>
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </section>
        <br />

        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <section>
                <Meanings meanings={meanings} />
              </section>
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
