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
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Router>
          <Route exact path="/" component={PageOneForm}/>
          <Route exact path="/feeling" component={PageTwoForm}/>
          <Route exact path="/understanding" component={PageThreeForm}/>
          <Route exact path="/supported" component={PageFourForm}/>
        </Router>
      </main>
      {/* <PageOneForm/> */}
    </div>
  );
}

export default App;
