import React, { Component } from 'react';

import './Home.css';
import SubscriptionsSteps from './SubscriptionsSteps/SubscriptionsSteps'
import BillingPage from "./BillingPage/BillingPage";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      view: 'home',
      clubData: {},
    };
  }

  getApiClubProfilesData(){

    const API_URL = 'http://api.local.sporteasy.net:8000/v2.1/clubs/' + this.props.club_id + '/profiles/';

    fetch(API_URL, {
        method: "GET",
        credentials: 'include',
    })
    .then(response =>
        response.json()
    )
    .then(json_response =>
        this.setState({clubData: json_response})
    )
  }

  componentDidMount(){
    this.getApiClubProfilesData();
  }

  render() {

    // 1
    if(this.state.view === 'home'){
      return (
        <div id={"billing_app"}>
            <BillingPage Home={this}/>
        </div>
      );
    }

    // 2
    else{
      return (
        <div id={"billing_app"}>
            <SubscriptionsSteps Home={this}/>
        </div>
      );
    }

  }
}

export default Home;
