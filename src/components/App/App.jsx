import React from 'react';
import axios from 'axios';
import{
  HashRouter as Router, Route
} from 'react-router-dom'
import './App.css';
import PageOneForm from '../PageOneForm/PageOneForm';
import PageTwoForm from '../PageTwoForm/PageTwoForm';
import PageThreeForm from '../PageThreeForm/PageThreeForm';
import PageFourForm from '../PageFourForm/PageFourForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
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
          <Route exact path="/feeling" component={PageOneForm}/>
          <Route exact path="/understanding" component={PageTwoForm}/>
          <Route exact path="/support" component={PageThreeForm}/>
          <Route exact path="/comments" component={PageFourForm}/>
        </Router>

      </main>
    </div>
  );
}

export default App;
