import React from 'react';

// components
import ProductOverview from './ProductOverview/index.jsx';
import QuestionsAnswers from './QuestionsAnswers/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import MouseTracker from '../src/SharedComponents/MouseTracker.jsx';

// styles
import styles from './app.module.css';

import Logo from '../../assets/logo.jpeg';
import Search from '../../assets/search.jpeg';
class App extends React.Component {
  render () {
    return(
      <div className={styles.appGrid}>
          <header className={styles.header}>
            <img src={Logo} alt='logo' className={styles.logo} />
            <img src={Search} alt='search icon' className={styles.logo} />
          </header>
          <div  id='Product-Overview'  className={styles.appGridItem}> <ProductOverview />   </div>
          <div  id='Related-Items'     className={styles.appGridItem}> <RelatedItems />      </div>
          <div  id='Questions-Answers' className={styles.appGridItem}> <QuestionsAnswers />  </div>
          <div  id='Ratings-Reviews'   className={styles.appGridItem}> <RatingsAndReviews /> </div>
      </div>
    )
  }
}

export default App;