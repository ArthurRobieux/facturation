import React, { Component } from 'react';
import './index.css';
import Popup from "reactjs-popup";

class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      selectedSubscription: 'year',
      estimatePrice: 0,
      promo: '',
    };
    this.handlePromoChange = this.handlePromoChange.bind(this);
  }

  handlePromoChange(event) {
    this.setState({promo: event.target.value});
  }

  goToStep(step){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    SubscriptionsSteps.setState({step:step});
    console.log(this.state);
  }

  changeSubscription(){
    if(this.state.selectedSubscription === 'month'){
      this.setState({selectedSubscription: 'year'});
      this.props.SubscriptionsSteps.setState({selectedSubscription: 'year'});
    }
    else{
      this.setState({selectedSubscription: 'month'});
      this.props.SubscriptionsSteps.setState({selectedSubscription: 'month'});
    }
    console.log(this.state.selectedSubscription)
  }

  updateSubscriptionsVisibility(){
    const month_info = document.getElementById("month_subscription_info");
    const year_info = document.getElementById("year_subscription_info");
    const month_title = document.getElementById("month_subscription_title");
    const year_title = document.getElementById("year_subscription_title");

    try {
      if (this.state.selectedSubscription === 'year') {
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
    if(this.state.selectedSubscription === 'year'){
      const estimatePrice = this.props.SubscriptionsSteps.props.Home.state.clubData.count * 2;
      this.state.estimatePrice = estimatePrice;
      this.props.SubscriptionsSteps.state.estimatePrice = estimatePrice;
      return(String(estimatePrice) + "€ / An")
    }
    else{
      const estimatePrice = this.props.SubscriptionsSteps.props.Home.state.clubData.count * 0.25;
      this.state.estimatePrice = estimatePrice;
      this.props.SubscriptionsSteps.state.estimatePrice = estimatePrice;
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
            <Popup trigger={<div className={"button_popup"}>?</div>}
                 modal
                 closeOnDocumentClick>

            <div>
              <h2>
                Qu'est ce que la facturation équitable ?
              </h2>
              <div className={"popup_text"}>
                Chez SportEasy, vous ne payez que pour les membres présents dans votre saison actuelle.
              </div>
              <div className={"popup_text"}>
                Ainsi, tous les trimestres, nous ajustons la facture au nombre de membres présents dans votre saison.
              </div>
              <div className={"popup_text"}>
                Si le nombre de membres est supérieur à celui présent lors de la souscription, nous vous facturons en
                fonction des trimestres restants pour les nouveaux membres.
              </div>
              <div className={"popup_text"}>
                Exemple : si vous êtes passé de 100 membres à 120 membres entre le début de votre abonnement et le début
                du second trimestre, nous éditerons une facture complémentaire de 30€ correspondant au nombre de membres
                ajoutés (20) multiplié par le nombre de trimestres restants (3) multiplié par le prix au trimestre (0.50€.
              </div>
              <div className={"popup_text"}>
                Dans le cas où le nombre de membre est inférieur à celui du jour de votre souscription, nous éditons un
                avoir valable sur vos prochains réglements, en fonction des trimestres restants.
              </div>
              <div className={"popup_text"}>
                Exemple : si vous êtes passé de 100 membres à 85 membres entre le début de votre abonnement et le début
                du second trimestre, nous éditerons un avoir de 22,50€ correspondant au nombre de membres supprimés (15)
                multiplié par le nombre de trimestre restants (3) multiplié par le prix au trimestre (0.50€).
              </div>
            </div>

          </Popup>
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

            <div className={"recap_element"}>
              <div className={"recap_category"}>
                Code Promo
              </div>
              <div className={"recap_value"}>
                  <input className={"step_form_input"} type={"text"} value={this.state.promo}
                         onChange={this.handlePromoChange}/>
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
