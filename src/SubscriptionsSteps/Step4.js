import React, { Component } from 'react';
import './index.css';

class Step4 extends Component {

  goToHome(){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    const Home = SubscriptionsSteps.props.Home;

    SubscriptionsSteps.setState({step:1});
    Home.setState({view:'home'});
  }

  estimatePrice(){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;

    if(SubscriptionsSteps.state.selectedSubscription === "year"){
      return(String(SubscriptionsSteps.state.estimatePrice) + "€ / an")
    }
    else if(SubscriptionsSteps.state.selectedSubscription === "month"){
      return(String(SubscriptionsSteps.state.estimatePrice) + "€ / mois")
    }
  }


  render() {
    return (
      <div className="step">
        <div className={"step_title"}>
          Validation
        </div>

        <div className={"step_subscription_block"}>
          <div className={"step_text"}>
            Vous bénéficiez de l'abonnement :
          </div>
        </div>

        <div className={"step_subscription_block"}>
          <div className={"step_important_text"}>
            SportEasy Club
          </div>
          <div className={"step_important_text"}>
            {this.estimatePrice()} pour {this.props.SubscriptionsSteps.props.Home.state.clubData.count} membres
          </div>
        </div>

        <div className={"step_subscription_block"}>
          <div className={"step_text"}>
            Votre abonnement sera automatiquement renouvelé le 01/12/2019 et vous serez débité d'un montant
            de {this.props.SubscriptionsSteps.state.estimatePrice} € si votre nombre de membre n'a pas
            évolué pour votre club.
          </div>
        </div>

        <div className={"step_subscription_block"}>
          <div className={"step_text"}>
            Merci d'avoir choisi SportEasy ! :-)
          </div>
        </div>

        <button className={"common_button"} onClick={() => this.goToHome()}>
            Continuer sur SportEasy
        </button>

      </div>
    );
  }
}

export default Step4;
