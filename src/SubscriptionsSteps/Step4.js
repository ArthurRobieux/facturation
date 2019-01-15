import React, { Component } from 'react';
import './index.css';

class Step4 extends Component {

  goToHome(){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    const Home = SubscriptionsSteps.props.Home;

    SubscriptionsSteps.setState({step:1});
    Home.setState({view:'home'});
  }


  render() {
    return (
      <div className="step">
        <div className={"step_title"}>
          Validation
        </div>

        <button className={"common_button"} onClick={() => this.goToHome()}>
            Continuer sur SportEasy
        </button>

      </div>
    );
  }
}

export default Step4;
