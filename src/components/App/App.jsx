import React from 'react';
import{
  HashRouter as Router, Route
} from 'react-router-dom'
import './App.css';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou'
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Router>
          <Route exact path="/"/>
          <Route exact path="/feeling" component={Feeling}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/review" component={ReviewFeedback}/>
          <Route exact path="/thankyou" component={ThankYou}/>
        </Router>
      </main>
    </div>
  );
}

export default App;
