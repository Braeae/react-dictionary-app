import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary() {
  let [word, setWord] = useState("laugh");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getResponse);
  }

  function getResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="Search-Form" onSubmit={search}>
        <input type="search" onChange={changeWord}></input>
      </form>

      <Results results={results} />
    </div>
  );
}

export default Dictionary;
