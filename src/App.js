import React, { useState } from "react";
import emoji from "./memphis-mini.png";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🍧": "Shaved Ice",
  "😔": "Sad",
  "🎂": "Birthday Cake",
  "🙌": "Raising Hands",
  "📰": "Newspaper",
  "🥳": "Partying Face",
  "👻": "Ghost",
  "🎁": "Gift",
  "🎭": "Performing Art",
  "💃": "Woman Dancing",
  "🚀": "Rocket",
  "🥗": "Green Salad",
  "🍻": "Clinking Beer Mugs",
  "😲": "Disbelief",
  "🌹": "Rose",
  "🤢": "Nauseated Face",
  "🤞": "Hope",
  "🎄": "Christmas Tree",
  "🎎": "Japanese Dolls",
  "🧇": "Waffle",
  "🧸": "Teddy Bear",
  "🤙": "Call me Hand",
  "🧚‍♂️": "Man Fairy",
  "🪔": "Diya Lamp",
  "🐍": "Snake",
  "🏸": "Badminton",
  "🧄": "Garlic",
  "🐳": "Spouting Whale",
  "🦚": "Peacock",
  "🎀": "Ribbon",
  "😑": "Annoyance",
  "🦆": "Duck",
  "🌈": "Rainbow",
  "🐈": "Cat",
  "👚": "Woman's Cloths",
  "🌗": "Last Quater Moon",
  "💰": "Money Bag",
  "👫": "Woman and Man holding Hands",
  "🎮": "Video Game",
  "🦈": "Shark",
  "🌏": "Globe showing Asia-Australia",
  "💍": "Ring",
  "☪": "Star and Crescent",
  "🏆": "Trophy",
  "👩‍🎓": "Woman Student",
  "🗡": "Dagger",
  "🌸": "Cheery Blosom",
  "🥜": "Peanuts",
  "✈": "Airplane",
  "🦁": "Lion",
  "🐶": "Dog",
  "🎓": "Graduation Cap",
  "🍇": "Grapes",
  "🌌": "Milky Way",
  "🖼": "Framedd Picture",
  "🥇": "1st place Medal",
  "🧭": "Compass",
  "⛲": "Fountain",
  "🌄": "Sunrise Over Mountains",
  "❄": "Snowflake",
  "♨": "Hot Springs",
  "☂": "Umbrella",
  "🌊": "Water Wave",
  "🛕": "Hindu Temple",
  "💥": "Collision",
  "💕": "Two Hearts",
  "💫": "Dizzy",
  "⚜": "Fleur-de-lis",
  "🎑": "Moon Ciewing Ceremony",
  "💖": "Love",
  "🧚‍♀️": "Woman Fairy",
  "✨": "Sparkles",
  "🤳": "Selfie",
  "🙈": "See-no-evil Monkey"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${emoji})`
      }}
    >
      <h1>Emoji Detector</h1>
      <input onChange={emojiInputHandler} />

      <div className="emojiDesciption">
        <h2>{meaning}</h2>
      </div>
      <div className="emojiWeHave">
        <h3>Emoji's we know</h3>
      </div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
