import { useEffect, useState } from "react";
import KeyboardButton from "../components/KeyboardButton";
import Wordrow from "../components/Wordrow";
import styles from "../styles/Home.module.scss";
import keyboardStyle from "../styles/Keyboard.module.scss";
import wordleWords from "../data/wordleWords.json";

export default function Home() {
  const [wordRow, setWordRow] = useState(0);
  const [letterNumber, setLetterNumber] = useState(0);
  const [correctWord, setCorrectWord] = useState([]);
  const [wordNotGuessedCorrect, setWordGuessedNotCorrect] = useState(true);
  const [words] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [letterStatus] = useState([
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n"],
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

  const [keyboardTopRowStatus] = useState(["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"]);
  const [keyboardMiddleRowStatus] = useState(["n", "n", "n", "n", "n", "n", "n", "n", "n"]);
  const [keyboardBottomRowStatus] = useState([
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
    "n",
  ]);

  useEffect(() => {
    let wordToGuess = wordleWords[Math.floor(Math.random() * 2500)].split("");
    console.log(wordToGuess);
    setCorrectWord(wordToGuess);
  }, []);

  const updateKeyboard = (letter, letterCorrect) => {
    let keyboardRow = undefined;
    let keyboardRowStatus = undefined;

    if(keyboardTopRow.includes(letter)){
      keyboardRow = keyboardTopRow;
      keyboardRowStatus = keyboardTopRowStatus;
    }else if(keyboardMiddleRow.includes(letter)){
      keyboardRow = keyboardMiddleRow;
      keyboardRowStatus = keyboardMiddleRowStatus;
    }else{
      keyboardRow = keyboardBottomRow;
      keyboardRowStatus = keyboardBottomRowStatus;
    }
    // console.log(keyboardRowStatus)
    keyboardRowStatus[keyboardRow.indexOf(letter)] = letterCorrect;
  }

  const validateLetters = (word, correctWord) => {
    let wordrow = wordRow;
    let correctCount = 0;
    let letterStat = letterStatus[wordrow];
    let letterCorrect = undefined;
    if (wordleWords.includes(word.join(""))) {
      for (let j = 0; j < 5; j++) {
        
        if (correctWord.includes(word[j])) {
          letterStat[j] = "a";
          letterCorrect = "a"
        }
        if (word[j] == correctWord[j]) {
          letterStat[j] = "c";
          letterCorrect = "c"
          correctCount++;
        }
        if (!correctWord.includes(word[j])) {
          letterStat[j] = "i";
          letterCorrect = "i"
        }
        updateKeyboard(word[j],letterCorrect);
      }
      if (correctCount == 5) {
        setWordGuessedNotCorrect(false);
      }
      return true;
    } else {
      return false;
    }
  };

  const handleEnter = () => {
    let wordrow = wordRow;
    let word = words[wordrow];
    console.log(correctWord);
    const isword = validateLetters(word, correctWord);

    if (isword) {
      wordrow++;
      setWordRow(wordrow);
      setLetterNumber(0);

      if (wordRow == 5 && wordNotGuessedCorrect) {
        let msg = "The correct word is " + correctWord.join("");
        alert(msg);
      }
    } else {
      alert("The word does not exist in the list");
    }
  };

  const handleRemove = () => {
    let word = words[wordRow];
    let letterNum = letterNumber - 1;

    if (letterNum != -1) {
      word[letterNum] = "";
      setLetterNumber(() => letterNumber - 1);
    }
  };

  const typeLetter = (letter) => {
    let word = words[wordRow];
    if (word.includes("") && letter != "ENTER" && letter != "BACK") {
      word[letterNumber] = letter;
      setLetterNumber(() => letterNumber + 1);
    } else if (letter == "BACK") {
      handleRemove();
    } else if (letter == "ENTER") {
      handleEnter();
    }
  };

  return (
    <div>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Wordle Clone</span>
        </div>
      <div className={styles.container}>
        <div className={styles.wordsBox}>
          <Wordrow word={words[0]} letterStatus={letterStatus[0]} />
          <Wordrow word={words[1]} letterStatus={letterStatus[1]} />
          <Wordrow word={words[2]} letterStatus={letterStatus[2]} />
          <Wordrow word={words[3]} letterStatus={letterStatus[3]} />
          <Wordrow word={words[4]} letterStatus={letterStatus[4]} />
          <Wordrow word={words[5]} letterStatus={letterStatus[5]} />
        </div>
        <div className={keyboardStyle.keyboard}>
          <div className={keyboardStyle.keyboardRow}>
            {keyboardTopRow.map((letter, index) => (
              <KeyboardButton
                key={letter}
                letter={letter}
                typeLetter={typeLetter}
                keyStatus= {keyboardTopRowStatus[index]}
              />
            ))}
          </div>
          <div className={keyboardStyle.keyboardRow}>
            {keyboardMiddleRow.map((letter, index) => (
              <KeyboardButton
                key={letter}
                letter={letter}
                typeLetter={typeLetter}
                keyStatus= {keyboardMiddleRowStatus[index]}
              />
            ))}
          </div>
          <div className={keyboardStyle.keyboardRow}>
            {keyboardBottomRow.map((letter, index) => (
              <KeyboardButton
                key={letter}
                letter={letter}
                typeLetter={typeLetter}
                keyStatus= {keyboardBottomRowStatus[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
