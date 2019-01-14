import React, { Component } from 'react';
import './index.css';

class Step1 extends Component {

  goToStep(step){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    SubscriptionsSteps.setState({step:step});
  }

  render() {
    return (
      <div className="step">

        Choisir un forfait<br/><br/>

        <button className={"common_button"} onClick={() => this.goToStep(2)}>
            Continuer
        </button>

      </div>
    );
  }
}

export default Step1;
