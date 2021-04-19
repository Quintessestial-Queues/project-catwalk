import React from 'react';

// components
import ProductOverview from './ProductOverview/index.jsx';
import QuestionsAnswers from './QuestionsAnswers/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';

// styles
import styles from './app.module.css';

class App extends React.Component {
  render () {
    return(
      <div className={styles.appGrid}>
          <header className={styles.appGridItem}> APP Here </header>
          <div className={styles.appGridItem}> <ProductOverview /> </div>
          <div className={styles.appGridItem}> <RelatedItems /> </div>
          <div className={styles.appGridItem}> <QuestionsAnswers /> </div>
      </div>
    )
  }
}

export default App;