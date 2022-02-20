import React, { useState } from "react";
import "./Dictionary.css";

function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    console.log(`Searching for ${word}`);
  }

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
