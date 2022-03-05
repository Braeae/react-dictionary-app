import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

function Dictionary() {
  let [word, setWord] = useState("Happiness");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function imageResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getResponse);

    let pexelsApiKey =
      "563492ad6f917000010000014734f4f954ba434da9bffa250bc81e63";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(imageResponse);
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
          <p className="Title">SEARCHEE</p>
          <input
            type="search"
            onChange={changeWord}
            defaultValue={word}
          ></input>
        </form>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;
