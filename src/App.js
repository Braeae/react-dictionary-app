import Dictionary from "./Dictionary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
      <p className="Info m-3">
        This is an open-sourced project hosted on Netlify
      </p>
    </div>
  );
}

export default App;
