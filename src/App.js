import Dictionary from "./Dictionary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
      <p className="AppInfo m-3">
        <a
          href="https://github.com/Braeae/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>
        <a
          href="https://vibrant-kilby-54c1e7.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          project
        </a>{" "}
        by Büşra © 2022
      </p>
    </div>
  );
}

export default App;
