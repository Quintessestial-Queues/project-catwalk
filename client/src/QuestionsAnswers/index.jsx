import React, {useContext} from 'react';
import styles from './questions.module.css';

//context
import  { ProductContext }  from '../state/ProductContext.js';

//componentes
import Question from './Question.jsx';

function QuestionsAnswers () {
  const { questions } = useContext(ProductContext);
  return (
    <div className={styles.questionsWrap}>
      <p className={styles.uppercase}>Questions & Answers</p>
      <input className={styles.search} placeholder='Have a Question? Search for Answers...' />
      {questions && questions.length && questions.map(question => {
        return (
            <Question question={question} key={question.question_id} />
        )
      })}
      <div className={styles.buttons}>
        <button className={styles.btn}>
          More Answered Questions
        </button>
        <button className={styles.btn}>
          Add a Question +
        </button>
      </div>
    </div>

  );
};

export default QuestionsAnswers;