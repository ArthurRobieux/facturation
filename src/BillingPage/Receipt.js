import React, { Component } from 'react';
import './index.css';

class Receipt extends Component {
  render() {
    return (
      <div className={"tab_container"}>

        <div className={"tab_block"}>
          <div className={"tab_title"}>
            Reçus
          </div>

          <div id={"table"}>

            <div className={"row"}>

              <div className={"table_cell"}>Date</div>
              <div className={"table_cell"}>Montant</div>
              <div className={"table_cell"}>Référence</div>
              <div className={"table_cell"}>Période</div>
              <div className={"table_cell"}>Statut</div>
              <div className={"table_cell"}>Facture</div>

            </div>

            <div className={"row"}>

              <div className={"table_cell"}>04/01/2018</div>
              <div className={"table_cell"}>300.00€</div>
              <div className={"table_cell"}>PFK49SKE</div>
              <div className={"table_cell"}>2018</div>
              <div className={"table_cell"}>Payé</div>
              <div className={"table_cell"}>-</div>

            </div>

            <div className={"row"}>

              <div className={"table_cell"}>12/01/2019</div>
              <div className={"table_cell"}>420.00€</div>
              <div className={"table_cell"}>S93JQO23</div>
              <div className={"table_cell"}>2019</div>
              <div className={"table_cell"}>En attente</div>
              <div className={"table_cell"}>-</div>

            </div>


          </div>


        </div>

      </div>
    );
  }
}

export default Receipt;
