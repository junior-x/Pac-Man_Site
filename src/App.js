import logo from "./logo.svg";
import headerTitle from "./src/assets/image/pac-man-headerlogo.png";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <head>
      <Button variant="info">Info</Button>
      </head>
      <div className="App">
        <header className="App-header">
          <img src={headerTitle} className="App-logo" alt="logo" />
          <p className="Text-Title">Glitch Theme for Visual Studio Code</p>
          <Button variant="info">Info</Button>
          <a
            className="App-link"
            href="https://marketplace.visualstudio.com/items?itemName=vampyrsoda.pac-man-theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install
          </a>
        </header>
      </div>
      <div className="About-Section">
        <text className="About-Text">About</text>
      </div>
      <footer>
        <ul className="Footer-List">
          <li className="#">
            Sobre
          </li>
          <li className="#">
            Blog
          </li>
          <li className="#">
            Contato
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
