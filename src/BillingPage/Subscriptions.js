import React, { Component } from 'react';
import './index.css';

class Subscriptions extends Component {

  showSteps(){
    const Home = this.props.Home;
    Home.setState({view: 'steps'});
  }

  render() {
    return (

      <div className={"tab_container"}>

        <div className={"tab_block"}>
          <div className={"tab_title"}>
            Abonnements
          </div>

          <br/><br/>
          SportEasy Club
          <br/><br/>

          Vous êtes actuellement en période d'essai jusqu'au 8 février 2019 pour l'équipe des Olympiens.
          <br/><br/>

          <button className={"common_button"} onClick={() => this.showSteps()}>Choisir un forfait</button>

        </div>

        <div className={"tab_block"}>
          <div className={"tab_title"}>
            Membres
          </div>
        </div>

      </div>

    );
  }
}

export default Subscriptions;
