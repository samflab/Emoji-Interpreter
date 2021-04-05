import logo from './logo.svg';
import './App.css';

function App() {
  function textfieldHandler(event) {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={(event) => textfieldHandler(event)} />
    
    </div>
  );
}

export default App;
