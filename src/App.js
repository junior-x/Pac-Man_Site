import headerTitle from "./src/assets/image/pac-man-headerlogo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={headerTitle} className="App-logo" alt="logo" />
          <p className="Text-Title">Glitch Theme for Visual Studio Code</p>
          <button style={{ 
            height: '60px', 
            width: '210px', 
            fontSize: '24px', 
            borderRadius: '30px',
            borderColor: '#28202c',
            boxShadow: '6px 6px 12px rgba(40, 32, 44, 0.3)'
          }} 
          onClick={() => window.open("https://marketplace.visualstudio.com/items?itemName=vampyrsoda.pac-man-theme" )}>
            Install
          </button>
        </header>
      </div>
      <div className="About-Section">
        <text className="About-Text">About</text>
      </div>
    </>
  );
}

export default App;
