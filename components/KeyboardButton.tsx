import React, { FC } from "react";
import keyboardStyle from "../styles/Keyboard.module.scss";



const KeyboardButton = ({letter, typeLetter}) => {
  return (
    <button
    onClick={()=>typeLetter(letter)}
      className={
        letter == "ENTER" || letter == "BACK"
          ? keyboardStyle.specialButton
          : keyboardStyle.button
      }
    >
      <span className={keyboardStyle.buttonLetter}>{letter}</span>
    </button>
  );
};

export default KeyboardButton;
