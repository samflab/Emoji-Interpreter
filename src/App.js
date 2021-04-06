import "./App.css";

function App() {
  function textfieldHandler(event) {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreterlaala</h1>
      <input onChange={(event) => textfieldHandler(event)} />
    </div>
  );
}

export default App;
