import React, { Component } from 'react';
import './index.css';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      adress: '',
      moreAdress: '',
      zipCode: '',
      city: '',
      country: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAdressChange = this.handleAdressChange.bind(this);
    this.handleMoreAdresseChange = this.handleMoreAdresseChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleAdressChange(event) {
    this.setState({adress: event.target.value});
  }

  handleMoreAdresseChange(event) {
    this.setState({moreAdress: event.target.value});
  }

  handleZipCodeChange(event) {
    this.setState({zipCode: event.target.value});
  }

  handleCityChange(event) {
    this.setState({city: event.target.value});
  }

  handleCountryChange(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className={"tab_container"}>

        <div className={"tab_block"}>

          <div className={"tab_title"}>
            Paramètres
          </div>

          <div className={"tab_description"}>
            <div className={"tab_text"}>
              Nom et adresse de l'association.
            </div>

            <div className={"tab_text"}>
              Ces informations figureront sur toutes les factures du compte.
            </div>
          </div>

          <form className={"tab_form"} onSubmit={this.handleSubmit}>

            <div className={"form_element"}>
              <div className={"form_text"}>
                Nom de l'association *
              </div>
              <input className={"form_input"} type={"text"} placeholder={"Les Zinzins"} value={this.state.name} onChange={this.handleNameChange}/>
            </div>

            <div className={"form_element"}>
              <div className={"form_text"}>
                Adresse *
              </div>
              <input className={"form_input"} type={"text"} placeholder={"7 Allée des Acacias"} value={this.state.adress} onChange={this.handleAdressChange}/>
            </div>

            <div className={"form_element"}>
              <div className={"form_text"}>
                Complément d'adresse
              </div>
              <input className={"form_input"} type={"text"} placeholder={"1er étage au fond à gauche"} value={this.state.more_adress} onChange={this.handleMoreAdresseChange}/>
            </div>

            <div className={"form_element"}>
              <div className={"form_text"}>
                Code Postal *
              </div>
              <input className={"form_input"} type={"text"} placeholder={"92310"} value={this.state.zip_code} onChange={this.handleZipCodeChange}/>
            </div>

            <div className={"form_element"}>
              <div className={"form_text"}>
                Ville *
              </div>
              <input className={"form_input"} type={"text"} placeholder={"Sèvres"} value={this.state.city} onChange={this.handleCityChange}/>
            </div>

            <div className={"form_element"}>
              <div className={"form_text"}>
                Pays
              </div>
              <select className={"form_input"} value={this.state.country} onChange={this.handleCountryChange}>
                <option value="" disabled selected></option>
                <option value="france">France</option>
                <option value="belgique">Belgique</option>
                <option value="angleterre">Angleterre</option>
                <option value="allemagne">Allemagne</option>
              </select>
              {/*<input className={"form_input"} type={"text"} placeholder={"France"} value={this.state.country} onChange={this.handleCountryChange}/>*/}
            </div>

            <div className={"form_element"}>
              <div className={"form_text"}></div>
              <button type={"submit"} className={"common_button"}>Enregistrer les modifications</button>
            </div>

          </form>

          <div className={"bottom_infos"}>
            * mentions obligatoires
          </div>




        </div>

      </div>
    );
  }
}

export default Settings;
