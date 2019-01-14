import React, { Component } from 'react';
import './index.css';

class SideMenu extends Component {

  loadTab(tab){
    const BillingPage = this.props.BillingPage;

    BillingPage.setState({tab:tab});
  }

  getTabClass(tab){
    const BillingPage = this.props.BillingPage;

    if(BillingPage.state.tab === tab){
      return("side_menu_active_element")
    }
    else{
      return("side_menu_element")
    }
  }

  render() {
    return (
      <div id={"side_menu"}>

        <div className={"side_menu_title"}>
          <img src={"https://i.pinimg.com/236x/7e/67/85/7e6785d9f7860c906d56c30b60b42162.jpg"}
               className={"side_menu_logo"} alt={"side_menu_logo"}/>
        </div>

        <div className={this.getTabClass('subscriptions')} onClick={() => this.loadTab('subscriptions')}>
          Abonnements
        </div>

        <div className={this.getTabClass('receipt')} onClick={() => this.loadTab('receipt')}>
          Reçu
        </div>

        <div className={this.getTabClass('settings')} onClick={() => this.loadTab('settings')}>
          Paramètres
        </div>

        <div className={this.getTabClass('contacts')} onClick={() => this.loadTab('contacts')}>
          Contacts
        </div>

        <div className={this.getTabClass('payments')} onClick={() => this.loadTab('payments')}>
          Moyens de paiement
        </div>

      </div>
    );
  }
}

export default SideMenu;
