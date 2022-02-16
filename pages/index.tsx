import { useState } from "react";
import KeyboardButton from "../components/KeyboardButton";
import Wordrow from "../components/Wordrow";
import styles from "../styles/Home.module.scss";
import keyboardStyle from "../styles/Keyboard.module.scss";

export default function Home() {
  const [wordRow, setWordRow] = useState(0);
  const [letterNumber, setLetterNumber] = useState(0);
  const [words, setWords] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const keyboardTopRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyboardMiddleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyboardBottomRow = [
    "ENTER",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "BACK",
  ];

  const removeLetter = () => {
    let word = words[wordRow];
    let letterNum = letterNumber - 1;

    if (letterNum != -1) {
      word[letterNum] = "";
      console.log(word);
      setLetterNumber(() => letterNumber - 1);
    }
  };

  const typeLetter = (letter) => {
    let word = words[wordRow];

    if (word.includes("") && letter != "ENTER" && letter != "BACK") {
      word[letterNumber] = letter;
      setLetterNumber(() => letterNumber + 1);
    } else if (letter == "BACK") {
      removeLetter();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wordsBox}>
        <Wordrow word={words[0]} />
        <Wordrow word={words[1]} />
        <Wordrow word={words[2]} />
        <Wordrow word={words[3]} />
        <Wordrow word={words[4]} />
        <Wordrow word={words[5]} />
      </div>
      <div className={keyboardStyle.keyboard}>
        <div className={keyboardStyle.keyboardRow}>
          {keyboardTopRow.map((letter) => (
            <KeyboardButton
              key={letter}
              letter={letter}
              typeLetter={typeLetter}
            />
          ))}
        </div>
        <div className={keyboardStyle.keyboardRow}>
          {keyboardMiddleRow.map((letter) => (
            <KeyboardButton
              key={letter}
              letter={letter}
              typeLetter={typeLetter}
            />
          ))}
        </div>
        <div className={keyboardStyle.keyboardRow}>
          {keyboardBottomRow.map((letter) => (
            <KeyboardButton
              key={letter}
              letter={letter}
              typeLetter={typeLetter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
