import React, { Component } from 'react';
import './index.css';

class Banner extends Component {
  render() {
    return (
      <div id={"banner"}>

          <div className={"banner_text"}>
            <div className={"banner_title"}>
              Offrez-vous SportEasy Club !
            </div>

            <div className={"banner_subtitle"}>
              Plein d'avantage à prendre la version club.
            </div>

          </div>

          <button id={"banner_button"} className={"common_button"}>
            Abonnez-vous à SportEasy Club
          </button>

      </div>
    );
  }
}

export default Banner;
