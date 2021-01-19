import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🥐": "Croissant",
  "🥞": "Pancakes",
  "🍛": "Curry Rice",
  "🥡": "Takeout Box",
  "🥪": "Sandwich",
  "🍟": "French Fries",
  "🍕": "Pizza"
};

var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [foodEmo, setFoodEmo] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var foodEmo = foodDictionary[userInput];

    if (foodEmo === undefined) {
      foodEmo = "we don't have that emo!! :(";
    }
    setFoodEmo(foodEmo);
  }

  function foodClicked(emoji) {
    var foodEmo = foodDictionary[emoji];
    setFoodEmo(foodEmo);
  }

  return (
    <div className="App">
      <div className="navigation">
        <h1>Fun Food Emoji 🍕</h1>
        <h2>Just some fun with food emojis!</h2>
        <hr />

        <input className="input-box" onChange={inputChangeHandler} />
        <div className="output-box">{foodEmo}</div>

        <h4>Food we have</h4>

        {foodWeKnow.map(function (emoji) {
          return (
            <span
              style={{
                fontSize: "1.5rem",
                padding: "0.5em",
                cursor: "pointer"
              }}
              onClick={() => foodClicked(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
