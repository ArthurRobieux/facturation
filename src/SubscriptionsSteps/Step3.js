import React, { Component } from 'react';
import './index.css';

class Step3 extends Component {
  constructor() {
    super();
    this.state = {
      selectedPayment: 'card',
    };
  }

  goToStep(step){
    const SubscriptionsSteps = this.props.SubscriptionsSteps;
    SubscriptionsSteps.setState({step:step});
  }

  changeSelectedPayment(payment){

    const paymentsList = ["card", "paypal", "debit", "check"];
    let paymentButton;

    for(var i=0; i<paymentsList.length; i++){
      paymentButton = document.getElementById("payment_button_" + paymentsList[i]);
      console.log(paymentsList[i]);
      if(payment === paymentsList[i]){
        paymentButton.style.color = "#2eb0ff";
        paymentButton.style.border = "2px solid #2eb0ff";
      }
      else{
        paymentButton.style.color = "gray";
        paymentButton.style.border = "2px solid #ececec";
      }
    }
    this.setState({selectedPayment: payment});
  }

  showPaymentInformations(){
    if(this.state.selectedPayment === "card") {
      return (
        <div className={"payment_informations"}>
          <div className={"step_text"}>
            Vous avez choisi le paiement par carte bancaire.
          </div>
        </div>
      )
    }
    else if(this.state.selectedPayment === "paypal") {
      return (
        <div className={"payment_informations"}>
          <div className={"step_text"}>
            Vous avez choisi le paiement par Paypal.
          </div>
        </div>
      )
    }
    else if(this.state.selectedPayment === "debit") {
      return (
        <div className={"payment_informations"}>
          <div className={"step_text"}>
            Vous avez choisi le paiement par prélèvement automatique
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={"payment_informations"}>
          <div className={"payment_text"}>
            Si vous souhaitez nous envoyer un chèque, des frais bancaires de gestion vous serons ajoutés au prix de votre
            abonnement. Cest frais s'élèvent à 20€.
          </div>
          <div className={"adress_infos"}>
            Informations suivantes :
          </div>
          <div className={"payment_text"}>
            A l'ordre de SportEasy<br/>
            Le Tremplin - 6 Rue Claude Farrère<br/>
            75016 Paris
          </div>
          <div className={"payment_text"}>
            Un email contenant vos informations vous sera envoyé et l'abonnement démarrera dès la réception de votre paiement.
          </div>
        </div>
      )
    }


  }

  render() {
    return (
      <div id={"step3"} className={"step"}>
        <div className={"step_title"}>
          Choisir un moyen de paiement
        </div>

        <div className={"payment_buttons"}>
          <div id={"payment_button_card"} className={"payment_button"} onClick={() => this.changeSelectedPayment("card")}>
            Carte bancaire
          </div>
          <div id={"payment_button_paypal"} className={"payment_button"} onClick={() => this.changeSelectedPayment("paypal")}>
            Paypal
          </div>
          <div id={"payment_button_debit"} className={"payment_button"} onClick={() => this.changeSelectedPayment("debit")}>
            Prélèvement automatique
          </div>
          <div id={"payment_button_check"} className={"payment_button"} onClick={() => this.changeSelectedPayment("check")}>
            Chèque
          </div>
        </div>

        {this.showPaymentInformations()}

        <button className={"common_button"} onClick={() => this.goToStep(4)}>
            Continuer
        </button>

      </div>
    );
  }
}

export default Step3;
