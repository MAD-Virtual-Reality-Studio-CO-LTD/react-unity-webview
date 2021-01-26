import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Unity Messenger
        </p>
        <a
          className="App-link"
          href="uniwebview://messageFromWeb?msg=Hello" //unitywebview://{Path}?{Args} example:uniwebview://action?key=value&anotherKey=anotherValue
          target="_blank"
          rel="noopener noreferrer"
        >
          Say hello to Unity
        </a>
      </header>
    </div>
  );
}

export default App;
