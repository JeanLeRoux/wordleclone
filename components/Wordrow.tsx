import React from 'react';
import styles from "../styles/Wordrow.module.scss"

const Wordrow = ({word, letterStatus}) => {
  return (
    <div className={styles.lettersContainer}>
          <div className={letterStatus[0] == "n" ? styles.normalLetterBlock : letterStatus[0] == "c" ? styles.correctLetterBlock : letterStatus[0] == "a" ? styles.almostLetterBlock: styles.notCorrectLetterBlock}>
            <span className={styles.letter}>{word[0]}</span>
          </div>
          <div className={letterStatus[1] == "n" ? styles.normalLetterBlock : letterStatus[1] == "c" ? styles.correctLetterBlock : letterStatus[1] == "a" ? styles.almostLetterBlock: styles.notCorrectLetterBlock}>
            <span className={styles.letter}>{word[1]}</span>
          </div>
          <div className={letterStatus[2] == "n" ? styles.normalLetterBlock : letterStatus[2] == "c" ? styles.correctLetterBlock : letterStatus[2] == "a" ? styles.almostLetterBlock: styles.notCorrectLetterBlock}>
            <span className={styles.letter}>{word[2]}</span>
          </div>
          <div className={letterStatus[3] == "n" ? styles.normalLetterBlock : letterStatus[3] == "c" ? styles.correctLetterBlock : letterStatus[3] == "a" ? styles.almostLetterBlock: styles.notCorrectLetterBlock}>
            <span className={styles.letter}>{word[3]}</span>
          </div>
          <div className={letterStatus[4] == "n" ? styles.normalLetterBlock : letterStatus[4] == "c" ? styles.correctLetterBlock : letterStatus[4] == "a" ? styles.almostLetterBlock: styles.notCorrectLetterBlock}>
            <span className={styles.letter}>{word[4]}</span>
          </div>
        </div>
  )
}

export default Wordrow