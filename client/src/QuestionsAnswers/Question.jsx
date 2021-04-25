import React, { useState, useEffect } from 'react';
import styles from './questions.module.css';

import Answer from './Answer.jsx';

function Question({ question }) {
  const [answerObj, setAnswerObj] = useState(question.answers)
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    transformAnswersObject();
  }, [answerObj])

  const transformAnswersObject = () => {
    const answers = Object.values(answerObj).map(answer => answer);
    setAnswers(answers);
  }

  return (
    <div>
      <div className={styles.questionBlock}>
        <div>
          <p className={styles.bold}>Q: {' '}</p>
          <p className={styles.bold}>{question.question_body}</p>
        </div>
        <div className={styles.helpful}>


          <p className={styles.questionHelpful}>
            Helpful
          <a>
            Yes (9)
          </a>
          </p>

          <p className={styles.report}>
            report
          </p>
        </div>
      </div>
      {answers.map(answer => {
        return (<Answer answer={answer} key={answer.id} />)
      })}
    </div>
  );
};

export default Question;