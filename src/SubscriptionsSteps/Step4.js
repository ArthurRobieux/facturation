import React, { Component } from 'react';
import './index.css';

class Step4 extends Component {

  goToStep(step){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    SubscriptionsSteps.setState({step:step});
  }


  render() {
    return (
      <div className="step">
        Validation<br/><br/>

        <button className={"common_button"} onClick={() => this.goToStep(1)}>
            Continuer sur SportEasy
        </button>

      </div>
    );
  }
}

export default Step4;
