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
  const [words, setWords] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [letterStatus, setLetterStatus] = useState([
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

useEffect(() => {
  setCorrectWord(wordleWords[Math.floor(Math.random()*2500)].split(""));
}, [])



const validateLetters = (word, correctWord) => {
  console.log(correctWord)
  console.log(word)
  let wordrow = wordRow;
  let letterStat = letterStatus[wordrow]; 
  if(wordleWords.includes(word.join(""))){
    for(let j = 0; j < 5; j++){
      if(correctWord.includes(word[j])){
        letterStat[j] = "a"
      }
      if(word[j] == correctWord[j]){
        letterStat[j] = "c"
      }
    }
    return true;
  }else{
    return false
  }
}

  const handleEnter = () => {
    let wordrow = wordRow;
    let word = words[wordrow];
    console.log(correctWord)
    const isword = validateLetters(word, correctWord);

    if(isword){
      wordrow++;
      setWordRow(wordrow);
      setLetterNumber(0);
    }
    else{
      alert("The word does not exist in the list")
    }
    
  }

  const handleRemove = () => {
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
      handleRemove();
    } else if (letter == "ENTER") {
      handleEnter();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wordsBox}>
        <Wordrow word={words[0]} letterStatus={letterStatus[0]}/>
        <Wordrow word={words[1]} letterStatus={letterStatus[1]}/>
        <Wordrow word={words[2]} letterStatus={letterStatus[2]}/>
        <Wordrow word={words[3]} letterStatus={letterStatus[3]}/>
        <Wordrow word={words[4]} letterStatus={letterStatus[4]}/>
        <Wordrow word={words[5]} letterStatus={letterStatus[5]}/>
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
