import React from "react";

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
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;
