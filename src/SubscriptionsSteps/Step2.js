import React, { Component } from 'react';
import './index.css';
import Settings from '../BillingPage/Settings'

class Step2 extends Component {

  goToStep(step){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    SubscriptionsSteps.setState({step:step});
  }


  render() {
    return (
      <div className="step">
        Coordonnées de facturation<br/><br/>

        <button className={"common_button"} onClick={() => this.goToStep(3)}>
            Continuer
        </button>

      </div>
    );
  }
}

export default Step2;
