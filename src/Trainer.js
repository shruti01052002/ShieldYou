import React from 'react';
import Header from './components/Header';
import Calibrate from './components/Calibrate';
import './index.css';

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
