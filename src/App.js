import "./styles.css";
import React, { useState } from "react";
import github from "./icons8-github.svg";
import linkedin from "./icons8-linkedin.svg";
import twitter from "./icons8-twitter.svg";
import telegram from "./icons8-telegram-app.svg";

var headingText = "Food Emoji Interpreter";
const foodDictionary = {
  "🍕": "pizza",
  "🍔": "beefburger",
  "🍿": "popcorn",
  "🥪": "sandwich",
  "🍝": "sapghetti",
  "🍨": "ice cream",
  "🍤": "fried prawn",
  "🍫": "chocolate bar",
  "🥞": "pancakes",
  "🍟": "french fries",
  "🥗": "green salad",
  "🎂": "birthday cake",
  "🥐": "croissant",
  "🍛": "curry rice",
  "🍪": "biscuit"
};
var foodsWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Translation will appear here..");

  function foodInputHandler(event) {
    var meaning = foodDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "Sorry! failure to recognise this emoji";
    }
    setMeaning(meaning);
  }

  function foodEmojiClickHandler(foodEmoji) {
    var meaning = foodDictionary[foodEmoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1>{headingText}</h1>
      </nav>
      <div>
        <h2 style={{ paddingTop: "3rem" }}>
          Enter your food emoji here to know the meaning of it
        </h2>
      </div>
      <input placeholder="e.g. 🍕 (pizza)" onChange={foodInputHandler} />
      <h2 className="Result">{meaning}</h2>
      <h3>Food emojis we know, you can choose from these also</h3>
      {foodsWeKnow.map(function (foodEmoji) {
        return (
          <span
            key={foodEmoji}
            onClick={() => foodEmojiClickHandler(foodEmoji)}
          >
            {foodEmoji}
          </span>
        );
      })}
      <footer>
        <p>
          © | 2022 |{" "}
          <a href="https://sudiptachakraborty.netlify.app/" class="portfolio">
            Sudipta Chakraborty
          </a>
        </p>
        <ul class="footer-list">
          <div class="social-media">
            <a href="https://github.com/SudiptaChakraborty51" class="links">
              <img src={github} alt="pic not found"></img>
            </a>
          </div>
          <div class="social-media">
            <a
              href="https://www.linkedin.com/in/sudipta-chakraborty-4a371a212/"
              class="links"
            >
              <img src={linkedin} alt="pic not found"></img>
            </a>
          </div>
          <div class="social-media">
            <a href="https://twitter.com/Sudipta41158180" class="links">
              <img src={twitter} alt="pic not found"></img>
            </a>
          </div>
          <div class="social-media">
            <a href="https://t.me/sudichakraborty" class="links">
              <img src={telegram} alt="pic not found"></img>
            </a>
          </div>
        </ul>
      </footer>
    </div>
  );
}
