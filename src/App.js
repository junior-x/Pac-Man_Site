import logo from './logo.svg';
import headerTitle from "./src/assets/image/pac-man-headerlogo.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headerTitle} className="App-logo" alt="logo" />
        <p className="Text-Title">
          Glitch Theme for Visual Studio Code
        </p>
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
  );
}

export default App;
