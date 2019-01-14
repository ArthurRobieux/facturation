import React, { Component } from 'react';

import './Home.css';
import SubscriptionsSteps from './SubscriptionsSteps/SubscriptionsSteps'
import BillingPage from "./BillingPage/BillingPage";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      view: 'steps',
    };
  }

  render() {

    // 1
    if(this.state.view === 'home'){
      return (
        <div id={"billing_app"}>
            <BillingPage/>
        </div>
      );
    }

    // 2
    else{
      return (
        <div id={"billing_app"}>
            <SubscriptionsSteps Home={this}/>
        </div>
      );
    }

  }
}

export default Home;
