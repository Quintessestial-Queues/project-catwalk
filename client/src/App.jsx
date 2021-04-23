import React from 'react';

// components
import ProductOverview from './ProductOverview/index.jsx';
import QuestionsAnswers from './QuestionsAnswers/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import MouseTracker from '../src/SharedComponents/MouseTracker.jsx';

// styles
import styles from './app.module.css';

class App extends React.Component {
  render () {
    return(
      <div className={styles.appGrid}>
          <header className={styles.appGridItem}> APP Here </header>
          <div  id='Product-Overview'  className={styles.appGridItem}> <ProductOverview />   </div>
          <div  id='Related-Items'     className={styles.appGridItem}> <RelatedItems />      </div>
          <div  id='Questions-Answers' className={styles.appGridItem}> <QuestionsAnswers />  </div>
          <div  id='Ratings-Reviews'   className={styles.appGridItem}> <RatingsAndReviews /> </div>
      </div>
    )
  }
}

export default App;