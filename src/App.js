import React, { useState } from "react";

// const customDictionary = {
//   teh: "the",
//   wrok: "work",
//   fot: "for",
//   exampl: "example",
// };
const customDictionary= [{ word: "React", meaning: "A JavaScript library for building user interfaces." },
  {word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);     
  };

  const handleSearch=()=>{
    const resultObject= customDictionary.find(w => (w.word).toLowerCase() === text.toLowerCase())

    if(resultObject){
      setDefinition(resultObject.meaning)
    }else{
      setDefinition("Word not found in the dictionary.")
      }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Dictionary App</h2>
      
      <input
        rows="5"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Search for a word..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{display:"flex"}}>
        <h3 style={{marginRight:"10px"}}>Definition:</h3>
        <p>{definition}</p></div>
    </div>
  );
}

export default App;
