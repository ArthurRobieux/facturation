import React, { Component } from 'react';
import './index.css';

class SubscriptionsSteps extends Component {
  render() {
    const Home = this.props.Home;
    return (
      <div id="steps">

        <div onClick={() => Home.setState({view:'home'})}>Retour</div>

      </div>
    );
  }
}

export default SubscriptionsSteps;
