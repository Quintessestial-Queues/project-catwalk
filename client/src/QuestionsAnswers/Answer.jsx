import React from 'react';
import styles from './questions.module.css';

function Answer({ answer }) {

  const formatDate = (timeStamp) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date(timeStamp);
    const date = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

    return date;
  }

  return (
    <div>
      <div className={styles.alignAnswer} >
        <p className={styles.bold}>A: {' '}</p>
        <p className={styles.body}>{answer.body}</p>
      </div>

      <div className={styles.answerDetails}>
        <p className={styles.answererInfo}>
          by {answer.answerer_name} {' '}
          {formatDate(answer.date)}
        </p>

        <p className={styles.answerHelpful}>
          Helpful Yes (9)
        </p>
        <p className={styles.report}>
          report
        </p>

      </div>
    </div >
  )
};

export default Answer;