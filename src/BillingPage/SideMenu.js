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
          <img src={"http://jetudielacom.com/wp-content/uploads/LIDL.jpg"}
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
