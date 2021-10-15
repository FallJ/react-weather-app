import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Harrisburg" />

        <footer>
          This project is
          {""}
          <a
            href="https://github.com/FallJ/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Julie Fallan
        </footer>
      </div>
    </div>
  );
}
