import React, { Component } from 'react';
import './index.css';
import Banner from './Banner';
import SideMenu from './SideMenu';
import Subscriptions from './Subscriptions';
import Receipt from './Receipt';
import Settings from "./Settings";
import Contacts from "./Contacts";
import Payments from "./Payments";

class BillingPage extends Component {
  constructor() {
    super();
    this.state = {
      tab: 'subscriptions',
    };
  }

  showTab(){
    const tab = this.state.tab;
    if(tab === 'subscriptions') {
      return (
        <Subscriptions Home={this.props.Home}/>
      )
    }
    else if(tab === 'receipt') {
      return (
        <Receipt/>
      )
    }
    else if(tab === 'settings'){
      return (
        <Settings/>
      )
    }
    else if(tab === 'contacts'){
      return (
        <Contacts/>
      )
    }
    else if(tab === 'payments'){
      return (
        <Payments/>
      )
    }
    else{
      return (
        <div>Error</div>
      )
    }
  }

  render() {
    return (
      <div id={"billing_page"}>

        <h3 className={"billing_title"}>Gestion de mon abonnement</h3>
        <Banner/>
        <SideMenu BillingPage={this}/>

        <div id={"billing_content"}>

          {this.showTab()}

        </div>

      </div>
    );
  }
}

export default BillingPage;