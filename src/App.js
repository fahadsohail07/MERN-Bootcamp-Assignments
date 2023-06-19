import { useState, useEffect, Fragment } from "react";
import "./App.css";

const App = () => {
  const [editingItem, setEditingItem] = useState(null);
  const [items, setItems] = useState([]);
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
    if (editingItem) {
      // Update existing item
      const updatedItem = {
        ...editingItem,
        text: enteredText,
        age: enteredAge,
        gender: enteredGender,
      };
      localStorage.setItem(updatedItem.key, JSON.stringify(updatedItem));
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.key === updatedItem.key ? updatedItem : item
        )
      );
      setEditingItem(null);
    } else {
      // Add new item
      const newItem = {
        key: Math.random(),
        text: enteredText,
        age: enteredAge,
        gender: enteredGender,
      };
      localStorage.setItem(newItem.key, JSON.stringify(newItem));
      setItems((prevItems) => [...prevItems, newItem]);
    }
    setEnteredText("");
    setEnteredAge("");
    setEnteredGender("");
  };

  useEffect(() => {
    const retrievedItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      retrievedItems.push(value);
    }
    setItems(retrievedItems);
  }, []);

  const editButtonHandler = (item) => {
    setEditingItem(item);
    setEnteredText(item.text);
    setEnteredAge(item.age);
    setEnteredGender(item.gender);
  };

  const deleteButtonHandler = (key) => {
    localStorage.removeItem(key);
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  };

  return (
    <Fragment>
      <div className="layout">
        <div className="input-form">
          <label className="label">Enter your name</label>
          <input
            type="text"
            value={enteredText}
            onChange={handleTextChange}
            className="input"
          ></input>
          <label className="label">Enter your age</label>
          <input
            type="text"
            value={enteredAge}
            onChange={handleAgeChange}
            className="input"
          ></input>
          <label className="label">Enter your gender</label>
          <input
            type="text"
            value={enteredGender}
            onChange={handleGenderChange}
            className="input"
          ></input>
          <button onClick={addButtonHandler}>Add</button>
        </div>
      </div>
      <div>
        <div>
          <div className="table">
            <p>Name</p>
            <p>Age</p>
            <p>Gender</p>
          </div>
          {items.map((item, index) => (
            <div className="table-layout">
              <div className="table" key={index}>
                <p>{item.text}</p>
                <p>{item.age}</p>
                <p>{item.gender}</p>
              </div>
              <div>
                {editingItem === item ? (
                  <button onClick={addButtonHandler}>Update</button>
                ) : (
                  <button onClick={() => editButtonHandler(item)}>Edit</button>
                )}
                <button onClick={() => deleteButtonHandler(item.key)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
