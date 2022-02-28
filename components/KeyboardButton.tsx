import React, { FC } from "react";
import keyboardStyle from "../styles/Keyboard.module.scss";

const KeyboardButton = ({letter, typeLetter, keyStatus}) => {
  return (
    <button
    onClick={()=>typeLetter(letter)}
      className={
        letter == "ENTER" || letter == "BACK"
          ? keyboardStyle.specialButton
          : keyStatus == "n" ? keyboardStyle.normalLetter : keyStatus == "c" ? keyboardStyle.correctLetter : keyStatus == "a" ? keyboardStyle.almostLetter: keyboardStyle.notCorrectLetter
      }
    >
      <span className={keyboardStyle.buttonLetter}>{letter}</span>
    </button>
  );
};

export default KeyboardButton;
