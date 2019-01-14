import React, { Component } from 'react';
import './index.css';
import SideMenu from './SideMenu';
import Subscriptions from './Subscriptions';

class BillingPage extends Component {
  render() {
    return (
      <div id={"billing_page"}>

        <h3 className={"billing_title"}>Gestion de mon abonnement</h3>

        <SideMenu/>

        <div id={"billing_content"}>

          <Subscriptions/>

        </div>

      </div>
    );
  }
}

export default BillingPage;