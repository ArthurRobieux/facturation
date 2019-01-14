import React, { Component } from 'react';
import './index.css';

class ProgressBar extends Component {

  render() {
    if(this.props.step === 1) {

      return (
        <div className={"progress_bar"}>

          <div className={"progress_line"} id={"progress_line_1"}></div>

          <div className={"progress_steps"}>

            <div className={"actual_step"}>
              <div className={"step_label"}>Choix d'un forfait</div>
            </div>
            <div className={"future_step"}>
              <div className={"step_label"}>Vos coordonnées</div>
            </div>
            <div className={"future_step"}>
              <div className={"step_label"}>Moyen de paiement</div>
            </div>
            <div className={"future_step"}>
              <div className={"step_label"}>Validation</div>
            </div>

          </div>

        </div>
      );
    }

    else if(this.props.step === 2) {

      return (
        <div className={"progress_bar"}>

          <div className={"progress_line"} id={"progress_line_2"}></div>

          <div className={"progress_steps"}>

            <div className={"old_step"}>
              <div className={"step_label"}>Choix d'un forfait</div>
            </div>
            <div className={"actual_step"}>
              <div className={"step_label"}>Vos coordonnées</div>
            </div>
            <div className={"future_step"}>
              <div className={"step_label"}>Moyen de paiement</div>
            </div>
            <div className={"future_step"}>
              <div className={"step_label"}>Validation</div>
            </div>

          </div>

        </div>
      );
    }

    else if(this.props.step === 3) {

      return (
        <div className={"progress_bar"}>

          <div className={"progress_line"} id={"progress_line_3"}></div>

          <div className={"progress_steps"}>

            <div className={"old_step"}>
              <div className={"step_label"}>Choix d'un forfait</div>
            </div>
            <div className={"old_step"}>
              <div className={"step_label"}>Vos coordonnées</div>
            </div>
            <div className={"actual_step"}>
              <div className={"step_label"}>Moyen de paiement</div>
            </div>
            <div className={"future_step"}>
              <div className={"step_label"}>Validation</div>
            </div>

          </div>

        </div>
      );
    }

    else{

      return (
        <div className={"progress_bar"}>

          <div className={"progress_line"} id={"progress_line_4"}></div>

          <div className={"progress_steps"}>

            <div className={"old_step"}>
              <div className={"step_label"}>Choix d'un forfait</div>
            </div>
            <div className={"old_step"}>
              <div className={"step_label"}>Vos coordonnées</div>
            </div>
            <div className={"old_step"}>
              <div className={"step_label"}>Moyen de paiement</div>
            </div>
            <div className={"actual_step"}>
              <div className={"step_label"}>Validation</div>
            </div>

          </div>

        </div>
      );
    }





  }
}

export default ProgressBar;
