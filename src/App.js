import { useState } from "react";

const App = () => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredGender, setEnteredGender] = useState("");

  const handleTextChange = (event) => {
    setEnteredText(event.target.value);
  };
  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };
  const handleGenderChange = (event) => {
    setEnteredGender(event.target.value);
  };

  const addButtonHandler = () => {
    console.log(enteredText);
    localStorage.setItem(Math.random(), [
      enteredText,
      enteredAge,
      enteredGender,
    ]);
    setEnteredText("");
    setEnteredAge("");
    setEnteredGender("");
  };

  // const showButtonHandler =() => {
  //   localStorage.getItem
  // }

  return (
    <div>
      <input
        type="text"
        value={enteredText}
        onChange={handleTextChange}
      ></input>
      <label>Enter your name</label>
      <input type="text" value={enteredAge} onChange={handleAgeChange}></input>
      <label>Enter your age</label>
      <input
        type="text"
        value={enteredGender}
        onChange={handleGenderChange}
      ></input>
      <label>Enter your gender</label>
      <button onClick={addButtonHandler}>Add</button>

      {/* <button onClick={showButtonHandler}>Show</button> */}
    </div>
  );
};

export default App;
