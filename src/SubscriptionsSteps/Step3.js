import React, { Component } from 'react';
import './index.css';

class Step3 extends Component {

  goToStep(step){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    SubscriptionsSteps.setState({step:step});
  }


  render() {
    return (
      <div className="step">
        Moyens de paiements<br/><br/>

        <button className={"common_button"} onClick={() => this.goToStep(4)}>
            Continuer
        </button>

      </div>
    );
  }
}

export default Step3;
