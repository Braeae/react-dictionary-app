import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    console.log(`Searching for ${word}`);
  }

  function searchResponse(response) {
    console.log(response);
    console.log(response.data[0].meanings[0].definitions[0]);
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  axios.get(apiUrl).then(searchResponse);

  function changeWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="Search-Form mt-4" onSubmit={search}>
        <input type="search" onChange={changeWord}></input>
      </form>
    </div>
  );
}

export default Dictionary;
