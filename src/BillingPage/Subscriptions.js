import React, { Component } from 'react';
import Popup from "reactjs-popup";

import './index.css';
import '../reactjs-popup-patch.css';

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


          <Popup trigger={<div id={"tab_question"} className={"tab_important_text"}>
                            Qu'est ce qu'un membre ?
                          </div>}
                 modal
                 closeOnDocumentClick>

            <div>
              <h2>
                Qu'est ce qu'un membre ?
              </h2>
              <div>
                Chez SportEasy, toutes les personnes qui se trouvent dans la catégorie "Membre" du menu sont comptabilisés
                comme des membres. Un membre peut ainsi être un joueur, un coach, un bénévole ou un membre du bureau.
                Les personnes n'ayant pas activé leurs comptes sont également comptabilisées parmi les membres.
              </div>
              <br/><br/>
              <div>
                En revanche, les parents d'un joueur ne sont pas comptabilisés dans les membres du club. L'ajout de
                plusieurs parents ne génère donc pas une facturation supplémentaire.
              </div>
            </div>

          </Popup>

        </div>

      </div>

    );
  }
}

export default Subscriptions;
