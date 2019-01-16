import React, { Component } from 'react';
import './index.css';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      name: 'La Raclette',
      adress: '25 Avenue Jules Ferry',
      moreAdress: '',
      zipCode: '91420',
      city: 'Morangis',
      country: '',
      formIsCorrect: '',
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
    // If form is correct, call the API to validate new data
    if(this.formIsCorrect()){
      console.log("Form is correct");
    }
    else{
      console.log("Form is uncorrect");
    }
    console.log(this.state);
    event.preventDefault();
  }

  formIsCorrect(){

    // If the required fields are not filled
    if(this.state.name === "" || this.state.adress === "" || this.state.zipCode === "" || this.state.city === ""){
      this.setState({formIsCorrect: false});
      return(false);
    }

    this.setState({formIsCorrect: true});
    return(true);
  }

  showFormSuccess(){
    if(this.state.formIsCorrect === false){
      return(
        <div className={"form_error"}>
          Formulaire invalide.
        </div>
      )
    }
    else if(this.state.formIsCorrect === true){
      return(
        <div className={"form_success"}>
          Changements pris en compte.
        </div>
      )
    }
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
              <input className={"form_input"} type={"text"} placeholder={"1er étage au fond à gauche"} value={this.state.moreAdress} onChange={this.handleMoreAdresseChange}/>
            </div>

            <div className={"form_element"}>
              <div className={"form_text"}>
                Code Postal *
              </div>
              <input className={"form_input"} type={"text"} placeholder={"92310"} value={this.state.zipCode} onChange={this.handleZipCodeChange}/>
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
                <option value="" disabled></option>
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
              {this.showFormSuccess()}
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
