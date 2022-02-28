import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary() {
  let [word, setWord] = useState("Happiness");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getResponse);
  }

  function startSearch(event) {
    event.preventDefault();
    search();
  }

  function getResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="Search-Form" onSubmit={startSearch}>
          <input
            type="search"
            onChange={changeWord}
            defaultValue={word}
          ></input>
        </form>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;
