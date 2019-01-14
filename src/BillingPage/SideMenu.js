import React, { Component } from 'react';
import './index.css';

class SideMenu extends Component {

  loadTab(tab){
    const BillingPage = this.props.BillingPage;

    BillingPage.setState({tab:tab});
  }

  render() {
    return (
      <div id={"side_menu"}>

        <div className={"side_menu_title"}>
          <img src={"https://i.pinimg.com/236x/7e/67/85/7e6785d9f7860c906d56c30b60b42162.jpg"}
               className={"side_menu_logo"} alt={"side_menu_logo"}/>
        </div>

        <div className={"side_menu_element"} onClick={() => this.loadTab('subscriptions')}>
          Abonnements
        </div>

        <div className={"side_menu_element"} onClick={() => this.loadTab('receipt')}>
          Reçu
        </div>

        <div className={"side_menu_element"} onClick={() => this.loadTab('settings')}>
          Paramètres
        </div>

        <div className={"side_menu_element"} onClick={() => this.loadTab('contacts')}>
          Contacts
        </div>

        <div className={"side_menu_element"} onClick={() => this.loadTab('payments')}>
          Moyens de paiement
        </div>

      </div>
    );
  }
}

export default SideMenu;
