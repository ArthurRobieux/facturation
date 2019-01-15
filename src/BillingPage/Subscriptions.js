import React, { Component } from 'react';
import './index.css';

class Subscriptions extends Component {

  showSteps(){
    const Home = this.props.Home;
    Home.setState({view: 'steps'});
  }

  render() {

    const Home = this.props.Home;

    return (

      <div className={"tab_container"}>

        <div className={"tab_block"}>
          <div className={"tab_title"}>
            Abonnements
          </div>

          <div className={"tab_important_text"}>
          SportEasy Club
          </div>

          <div className={"tab_important_text"}>
          Vous êtes actuellement en période d'essai jusqu'au 8 février 2019 pour l'équipe des Olympiens.
          </div>

          <button className={"common_button"} onClick={() => this.showSteps()}>Choisir un forfait</button>

        </div>

        <div className={"tab_block"}>
          <div className={"tab_title"}>
            Membres
          </div>

          <div id={"nb_club_members"} className={"tab_important_text"}>
            {Home.state.clubData.count}
          </div>

          <div className={"tab_important_text"}>
            membres de votre club sont actuellement inscrits à SportEasy.
          </div>

          <div id={"tab_question"} className={"tab_important_text"}>
            Qu'est ce qu'un membre ?
          </div>

        </div>

      </div>

    );
  }
}

export default Subscriptions;
