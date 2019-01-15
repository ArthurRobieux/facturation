import React, { Component } from 'react';
import './index.css';

class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      selected_subscription: 'year',
      estimatePrice: 0,
    };
  }

  goToStep(step){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    SubscriptionsSteps.setState({step:step});
    console.log(this.state);
  }

  changeSubscription(){
    if(this.state.selected_subscription === 'month'){
      this.setState({selected_subscription: 'year'});
    }
    else{
      this.setState({selected_subscription: 'month'});
    }
    console.log(this.state.selected_subscription)
  }

  updateSubscriptionsVisibility(){
    const month_info = document.getElementById("month_subscription_info");
    const year_info = document.getElementById("year_subscription_info");
    const month_title = document.getElementById("month_subscription_title");
    const year_title = document.getElementById("year_subscription_title");

    try {
      if (this.state.selected_subscription === 'year') {
        month_info.style.opacity = 0.25;
        year_info.style.opacity = 1;
        month_title.style.color = "#000000";
        year_title.style.color = "#2eb0ff";
      }
      else {
        month_info.style.opacity = 1;
        year_info.style.opacity = 0.25;
        month_title.style.color = "#2eb0ff";
        year_title.style.color = "#000000";
      }
    }
    catch{}
  }

  estimatePrice(){
    if(this.state.selected_subscription === 'year'){
      const estimatePrice = this.props.SubscriptionsSteps.props.Home.state.clubData.count * 2;
      this.state.estimatePrice = estimatePrice;
      return(String(estimatePrice) + "€ / An")
    }
    else{
      const estimatePrice = this.props.SubscriptionsSteps.props.Home.state.clubData.count * 0.25;
      this.state.estimatePrice = estimatePrice;
      return(String(estimatePrice) + "€ / Mois")
    }
  }

  render() {

    this.updateSubscriptionsVisibility();

    return (
      <div className={"step_container"}>

        <div id={"year_subscription_info"}>
          <div className={"subscription_info_title"}>
            Forfait annuel
          </div>
          <div className={"subscription_info_element"}>
            0.20€ par membre / mois
          </div>
          <div className={"subscription_info_element"}>
            Engagement d'un an
          </div>
          <div className={"subscription_info_element"}>
            Facturation équitable
          </div>
        </div>

        <div className="step">

          <div className={"step_title"}>
            Choisir un forfait
          </div>

          <div className={"step_subscription_block"}>
            <div className={"step_subscription"}>
              <div id={"year_subscription_title"}>
                Annuel
              </div>
              <div className={"subscription_price"}>
                (0.20€ / mois)
              </div>
            </div>
            <label className="switch">
              <input type="checkbox" onClick={() => this.changeSubscription()}/>
                <span className="slider round"></span>
            </label>
            <div className={"step_subscription"}>
              <div id={"month_subscription_title"}>
                Mensuel
              </div>
              <div className={"subscription_price"}>
                (0.25€ / mois)
              </div>
            </div>
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
              {this.estimatePrice()}
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

        <div id={"month_subscription_info"}>
          <div className={"subscription_info_title"}>
            Forfait mensuel
          </div>
          <div className={"subscription_info_element"}>
            0.25€ par membre / mois
          </div>
          <div className={"subscription_info_element"}>
            Sans engagement
          </div>
          <div className={"subscription_info_element"}>
            Facturation mensuelle
          </div>
        </div>

      </div>
    );
  }
}

export default Step1;
