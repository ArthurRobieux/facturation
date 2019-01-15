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

        <div className={"step_title"}>
          Choisir un forfait
        </div>

        <div className={"step_subscription_block"}>
          <label className="switch">
            <input type="checkbox"/>
              <span className="slider round"></span>
          </label>
        </div>

        <div className={"step_subscription_block"}>

          <div className={"recap_element"}>
            <div className={"recap_category"}>
              Renouvellement
            </div>
            <div className={"recap_value"}>
              Automatique
            </div>
          </div>

          <hr className={"hr_step_separator"}/>

          <div className={"recap_element"}>
            <div className={"recap_category"}>
              Période
            </div>
            <div className={"recap_value"}>
              2018-2019
            </div>
          </div>

          <div className={"recap_element"}>
            <div className={"recap_category"}>
              Membres actuel
            </div>
            <div className={"recap_value"}>
              {this.props.SubscriptionsSteps.props.Home.state.clubData.count}
            </div>
          </div>

          <hr className={"hr_step_separator"}/>

        </div>

        <div className={"step_subscription_block"}>
          <div className={"subscription_text"}>
            Estimation
          </div>
          <div className={"subscription_total_amount"}>
            {this.props.SubscriptionsSteps.props.Home.state.clubData.count * 2} €
          </div>
          <div className={"subscription_text"}>
            Le prix sera calculé sur le nombre de membre le jour du début de l'abonnement.
          </div>
        </div>

        <button className={"common_button"} onClick={() => this.goToStep(2)}>Continuer</button>

        <div className={"bottom_infos"}>
          En souscrivant à SportEasy Club, vous acceptez les conditions d'utilisations et la Politique de confidentialité.
        </div>

      </div>
    );
  }
}

export default Step1;
