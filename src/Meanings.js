import React from "react";
import "./Dictionary.css";
import "./Meanings.css";
import Synonyms from "./Synonyms";

function Meanings(props) {
  console.log(props.meanings.definitions[0].definition);
  return (
    <div className="Meanings">
      <h4>{props.meanings.partOfSpeech}</h4>

      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div className="Defintions" key={index}>
            <p>{definition.definition}</p>
            <p className="Examples">
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;
