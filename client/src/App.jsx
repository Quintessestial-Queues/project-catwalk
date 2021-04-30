import React from 'react';
import loadable from '@loadable/component';

// components
import ProductOverview from './ProductOverview/index.jsx';
const QuestionsAnswers = loadable(() => import('./QuestionsAnswers/index.jsx'));
const RelatedItems = loadable(() => import('./RelatedItems/index.jsx'));
const RatingsAndReviews = loadable(() => import('./RatingsAndReviews/RatingsAndReviews.jsx'));
const MouseTracker = loadable(() => import('../src/SharedComponents/MouseTracker.jsx'));

// styles
import styles from './app.module.css';

// import Logo from '../../assets/logo.jpeg';
// import Search from '../../assets/search.jpeg';
class App extends React.Component {
  render () {
    return(
      <div className={styles.appGrid}>
          <header className={styles.header}>
            {/* <img src={Logo} alt='logo' className={styles.logo} />
            <img src={Search} alt='search icon' className={styles.logo} /> */}
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