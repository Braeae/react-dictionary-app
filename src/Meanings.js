import React from "react";
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
          <div key={index}>
            <p>
              <strong>Definition: </strong>
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
