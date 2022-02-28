import React from "react";
import "./Dictionary.css";
import "./Meanings.css";
import Synonyms from "./Synonyms";

function Meanings(props) {
  console.log(props.meanings.definitions[0].definition);
  return (
    <div className="Meanings">
      <h4>
        <strong>{props.meanings.partOfSpeech}</strong>
      </h4>

      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div className="Defintions" key={index}>
            <p>
              {definition.definition}

              <br />
              <em>{definition.example}</em>

              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;
