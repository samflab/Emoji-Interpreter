import { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "🐶": "animal Dog",
  "😺": "animal Cat",
  "🐁": "Animal rat"
};

function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userEmojiInput = event.target.value;
    var meaning = emojiDictionary[userEmojiInput];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={(event) => emojiInputHandler(event)} />
      <h2>{meaning} </h2>
    </div>
  );
}

export default App;
