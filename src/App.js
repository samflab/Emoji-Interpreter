import { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "🐶": "animal Dog",
  "😺": "animal Cat",
  "🐁": "Animal rat"
};

var emojisWeHave = Object.keys(emojiDictionary);
function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userEmojiInput = event.target.value;
    var meaning = emojiDictionary[userEmojiInput];

    if (meaning === undefined) meaning = "We don't have this in our db";

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>Meaning of the Emoji: {meaning} </h2>
      <h4> Emojis We Currently Have </h4>
      {
        <span>
          {emojisWeHave.map(function (emoji) {
            return (
              <span
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
                style={{
                  fontSize: "1.5rem",
                  padding: ".9%",
                  cursor: "pointer"
                }}
              >
                {emoji}
              </span>
            );
          })}
        </span>
      }
    </div>
  );
}

export default App;
