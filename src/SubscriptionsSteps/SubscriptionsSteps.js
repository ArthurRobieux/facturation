import React, { Component } from 'react';
import './index.css';

class SubscriptionsSteps extends Component {
  render() {
    const Home = this.props.Home;
    return (
      <div id="steps">

        <button onClick={() => Home.setState({view:'home'})}>Retour</button>

      </div>
    );
  }
}

export default SubscriptionsSteps;
