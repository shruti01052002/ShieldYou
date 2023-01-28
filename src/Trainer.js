import React from 'react';
import Header from './components/Header';
import Calibrate from './components/Calibrate';
import './App.css';
import './index.css';
// import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  state = {
    heading: 'SELF DEFENCE TRAINER',
    tagline: 'BECAUSE SAFETY COMES FIRST',
  }
  render() {
    return (
      <>
        <Header heading={this.state.heading} tagline={this.state.tagline} />
        <Calibrate />
      </>
    );
  }
}

export default App;
