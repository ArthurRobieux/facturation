import React, { Component } from 'react';
import './index.css';
import transactions from "./transactions"

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

            <div>

              {transactions.transactions.map(transaction => (
                <div className={"row"}>

                  <div className={"table_cell"}>{transaction.date}</div>
                  <div className={"table_cell"}>{transaction.amount}</div>
                  <div className={"table_cell"}>{transaction.reference}</div>
                  <div className={"table_cell"}>{transaction.subscription}</div>
                  <div className={"table_cell"}>{transaction.state}</div>
                  <div className={"table_cell"}>{transaction._links.invoice.url}</div>

                </div>
              ))}
            </div>


          </div>


        </div>

      </div>
    );
  }
}

export default Receipt;
