import React from 'react';
import styles from "../styles/Wordrow.module.scss"

const Wordrow = ({word}) => {
  return (
    <div className={styles.lettersContainer}>
          <div className={styles.letterBlock}>
            <span className={styles.letter}>{word[0]}</span>
          </div>
          <div className={styles.letterBlock}>
            <span className={styles.letter}>{word[1]}</span>
          </div>
          <div className={styles.letterBlock}>
            <span className={styles.letter}>{word[2]}</span>
          </div>
          <div className={styles.letterBlock}>
            <span className={styles.letter}>{word[3]}</span>
          </div>
          <div className={styles.letterBlock}>
            <span className={styles.letter}>{word[4]}</span>
          </div>
        </div>
  )
}

export default Wordrow