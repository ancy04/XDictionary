import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText.trim() === "") {
      setSuggestion("");
      return;
    }

    const words = inputText.split(/\s+/);
    const found = words.find((word) => {
      const lowerWord = word.toLowerCase();
      return customDictionary.hasOwnProperty(lowerWord);
    });

    if (found) {
      const corrected = customDictionary[found.toLowerCase()];
      setSuggestion(`Did you mean: ${corrected}?`);
    } else {
      setSuggestion("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Spell Checker</h2>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      {suggestion && (
        <p style={{ marginTop: "10px", fontWeight: "bold", color: "blue" }}>
          {suggestion}
        </p>
      )}
    </div>
  );
}

export default App;
